from helpers import device_restart, device_shutdown, is_rpi
from helpers import get_device_id, get_wifi_card, network_conf, scan_wifi
from remote_helpers import is_time, cloud_backup, get_pulses, save_pulses, timestamp, get_records
from flask import Flask, request, jsonify, make_response
from flask_socketio import SocketIO, send
from flask_cors import CORS
from time import sleep, time
from threading import Thread
from os import uname
from signal import pause
from keyboard import press_and_release
import json

if is_rpi:
    from gpiozero import LED, Button
    """
    Hardware layout 
    p: pumps - output
    l: reservoir level sensor - input - pullup on ic
    s: flow sensor - input - pullup on ic
    k: ui control button - input - pullup on ic

                3V3  (1) (2)  5V    
              GPIO2  (3) (4)  5V    
              GPIO3  (5) (6)  GND   
        p1    GPIO4  (7) (8)  GPIO14
                GND  (9) (10) GPIO15
        p2    GPIO17 (11) (12) GPIO18  s1
        p3    GPIO27 (13) (14) GND   
        p4    GPIO22 (15) (16) GPIO23  s2 
                 3V3 (17) (18) GPIO24  s3
        l1    GPIO10 (19) (20) GND   
        l2     GPIO9 (21) (22) GPIO25
        l3    GPIO11 (23) (24) GPIO8 
                 GND (25) (26) GPIO7 
        l4     GPIO0 (27) (28) GPIO1 
               GPIO5 (29) (30) GND   
        k1     GPIO6 (31) (32) GPIO12  s4
        k2    GPIO13 (33) (34) GND   
        k3    GPIO19 (35) (36) GPIO16
        k4    GPIO26 (37) (38) GPIO20
                 GND (39) (40) GPIO21
    """
    # Pumps outputs
    pumps = [LED(4), LED(17), LED(27), LED(22)]
    # Flow sensor input
    flow_gpios = ['GPIO18', 'GPIO23', 'GPIO24', 'GPIO12']
    flow_buttons = [Button(18), Button(23), Button(24), Button(12)]
    # Keyboard input
    key_gpios = ['GPIO6', 'GPIO13', 'GPIO19', 'GPIO26']
    key_buttons = [Button(6), Button(13), Button(19), Button(26)]
    # Level sensor input
    level_gpios = ['GPIO10', 'GPIO09', 'GPIO11', 'GPIO0']
    level_buttons = [Button(10), Button(9), Button(11), Button(0)]

MAX_PULSES = 1e3
MAX_TIME = 60*60

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app, cors_allowed_origins="*")

port = 9999
records = get_records()  # From persistent storage
pumps_config = [
    {
        'id': 0, 'total_pulses': records[0], 'on': False, 'timeout': 1,
        'time_count': 0, 'pulses': 10, 'pulses_count': 0
    },
    {
        'id': 1, 'total_pulses': records[1], 'on': False, 'timeout': 1,
        'time_count': 0, 'pulses': 13, 'pulses_count': 0
    },
    {
        'id': 2, 'total_pulses': records[2], 'on': False, 'timeout': 1,
        'time_count': 0, 'pulses': 15, 'pulses_count': 0
    },
    {
        'id': 3, 'total_pulses': records[3], 'on': False, 'timeout': 1,
        'time_count': 0, 'pulses': 18, 'pulses_count': 0
    },
]


notification = {
    "message": "",
    "timestamp": timestamp(),
}


def save_notification(message):
    global notification
    notification = {
        "message": message,
        "timestamp": timestamp(),
    }


def total_pulses():
    return list(map(lambda x: x['total_pulses'], pumps_config))
# This manages sensor pulses


def volume_counter():
    global pumps_config

    key_map = ['a', 's', 'd', 'f']

    def pulse_fc(button):
        id = flow_gpios.index(str(button.pin))

        pump = pumps_config[id]
        pump['total_pulses'] += 1
        pump['pulses_count'] += 1
        if pump['pulses_count'] >= pump['pulses']:
            pump['on'] = False
            print('... sensor stopping pump', pump['id'])

        print('...', pump)
        pumps_config[id] = pump

        socketio.send(json.dumps(pump), broadcast=True)

    def keyboard_fc(button):
        id = key_gpios.index(str(button.pin))
        press_and_release(key_map[id])

    for button in flow_buttons:
        button.when_pressed = pulse_fc

    for key in key_buttons:
        key.when_pressed = keyboard_fc

    pause()


def send_status_debug():
    global pumps_config
    while True:
        for pump in pumps_config:
            if pump['pulses_count'] >= pump['pulses'] or pump['time_count'] >= pump['timeout']:
                if pump['on']:
                    pump['on'] = False
                    pump['pulses_count'] = 0
                    pump['time_count'] = 0
                    save_pulses(get_pulses)
                    socketio.send(json.dumps({
                        'id': pump['id'],
                        'pulses_count': pump['pulses_count'],
                        'time_count': round(pump['time_count'], 1),
                        'on': pump['on'],
                    }), broadcast=True)

            if pump['on']:
                pump['total_pulses'] += 1
                pump['time_count'] += 1
                pump['pulses_count'] += 1

            if pump['on']:
                socketio.send(json.dumps({
                    'id': pump['id'],
                    'pulses_count': pump['pulses_count'],
                    'time_count': round(pump['time_count'], 1),
                    'on': pump['on'],
                }), broadcast=True)
        sleep(1)


Thread(target=volume_counter if is_rpi else send_status_debug, args=[]).start()


def time_counter():
    global pumps_config, pumps
    time_step = 0.1

    while True:
        if is_rpi:
            for i, pump in enumerate(pumps):
                pump.on() if pumps_config[i]['on'] else pump.off()

        for pump in pumps_config:
            if pump['on']:
                pump['time_count'] += time_step

                if pump['time_count'] >= pump['timeout']:
                    pump['time_count'] = round(pump['time_count'], 1)
                    print('... time stopping pump', pump['id'])
                    pump['on'] = False
                    save_pulses()
                    save_notification('Check pump %d'(pump['id']+1))
                    socketio.send(json.dumps(pump), broadcast=True)

        sleep(time_step)


Thread(target=time_counter, args=[]).start()


def send_report():
    while True:
        if is_time('15:00:00'):
            reservoirs = [level.value for level in level_buttons]
            cloud_backup(total_pulses(), notification, reservoirs)
        sleep(1)


Thread(target=send_report, args=[]).start()


def start_pump(id, pulses=MAX_PULSES, timeout=MAX_TIME):
    global pumps_config
    pump = pumps_config[id]
    pump['pulses'] = pulses
    pump['timeout'] = timeout
    pump['pulses_count'] = 0
    pump['time_count'] = 0
    pump['on'] = pulses != 0
    pumps_config[id] = pump
    socketio.send(json.dumps(pump), broadcast=True)


def restart_pump(id, pulses=MAX_PULSES, timeout=MAX_TIME):
    global pumps_config
    pump = pumps_config[id]
    pump['pulses'] = pulses
    pump['timeout'] = timeout
    pump['on'] = pulses != 0
    pumps_config[id] = pump
    socketio.send(json.dumps(pump), broadcast=True)


def stop_pump(id):
    global pumps_config
    pump = pumps_config[id]
    pump['on'] = False
    save_pulses(total_pulses())
    pumps_config[id] = pump
    socketio.send(json.dumps(pump), broadcast=True)


@app.route('/')
def index():
    return "... control server running on port %s" % port


@app.route('/api/startcontrolled', methods=['post'])
def startcontrolled():
    config = request.get_json()
    id = int(config['id'])
    pulses = int(config['pulses'])
    timeout = float(config['timeout'])
    start_pump(id, pulses, timeout)
    response = make_response(jsonify({
        "id": id,
        'total_pulses': pumps_config[id]['total_pulses']
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/start/<id>', methods=['post'])
def start(id):
    id = int(id)
    start_pump(id)
    response = make_response(jsonify({
        "id": id,
        'total_pulses': pumps_config[id]['total_pulses']
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/stop/<id>', methods=['post'])
def stop(id):
    id = int(id)
    stop_pump(id)
    response = make_response(jsonify({
        "id": id,
        'total_pulses': pumps_config[id]['total_pulses']
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/restart/<id>', methods=['post'])
def restart(id):
    id = int(id)
    restart_pump(id)
    response = make_response(jsonify({
        "id": id,
        'total_pulses': pumps_config[id]['total_pulses']
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/info/<id>')
def info(id):
    id = int(id)
    response = make_response(jsonify({
        "id": id,
        "on": pumps_config[id]['on'],
        'total_pulses': pumps_config[id]['total_pulses']
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/network', methods=['POST'])
def setNetwork():
    credentials = request.get_json()
    network_conf(credentials['ssid'], credentials['pass'])
    response = make_response(jsonify({
        "message": True,
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/network/card')
def getNetworkCard():
    card = get_wifi_card()
    response = make_response(jsonify({
        "card": card,
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/id')
def getDeviceId():
    serial = get_device_id()
    response = make_response(jsonify({
        "id": serial,
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/network/scan')
def getNetworkCardList():
    networks = scan_wifi()
    response = make_response(jsonify({
        "networks": networks,
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/poweroff', methods=['POST'])
def poweroff_endpoint():
    save_pulses(total_pulses)
    device_shutdown()
    response = make_response(jsonify({
        "message": True,
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/restart', methods=['POST'])
def restart_endpoint():
    save_pulses(total_pulses)
    device_restart()
    response = make_response(jsonify({
        "message": True,
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/set_server', methods=['POST'])
def set_server():
    print('new_server set!!!!!!!!!!')
    print('new_server set!!!!!!!!!!')
    print('new_server set!!!!!!!!!!')
    response = make_response(jsonify({
        "message": True,
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response


@socketio.on('message')
def handle_message(msg):
    print("Message: " + msg)


app.run(host='0.0.0.0', debug=False, port=port)
