from flask import Flask, request, jsonify, make_response
from flask_socketio import SocketIO, send
from flask_cors import CORS
from time import sleep, time
from threading import Thread
from os import uname
from signal import pause
import json

rpi = uname()[4] != 'x86_64'

if rpi:
    from gpiozero import LED, Button

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app, cors_allowed_origins="*")

port = 9999

pumps_config = [
    {'id': 0, 'total_pulses': 123, 'on': False, 'timeout': 20,
        'time_count': 0, 'pulses': 10, 'pulses_count': 0},
    {'id': 1, 'total_pulses': 323, 'on': False, 'timeout': 15,
     'time_count': 0, 'pulses': 13, 'pulses_count': 0},
    {'id': 2, 'total_pulses': 123, 'on': False, 'timeout': 5,
     'time_count': 0, 'pulses': 15, 'pulses_count': 0},
    {'id': 3, 'total_pulses': 223, 'on': False, 'timeout': 10,
     'time_count': 0, 'pulses': 18, 'pulses_count': 0},
]

if rpi:
    pumps = [LED(4), LED(17), LED(27), LED(22)]

MAX_PULSES = 1e3
MAX_TIME = 60*60

# This manages sensor pulses


def volume_counter():
    global pumps_config
    gpios = ['GPIO18', 'GPIO23', 'GPIO24', 'GPIO12']
    buttons = [Button(18), Button(23), Button(24), Button(12)]

    def pulse_fc(button):
        id = gpios.index(str(button.pin))

        pump = pumps_config[id]
        pump['total_pulses'] += 1
        pump['pulses_count'] += 1
        if pump['pulses_count'] >= pump['pulses']:
            pump['on'] = False
            print('... sensor stopping pump', pump['id'])

        print('...', pump)
        pumps_config[id] = pump

        socketio.send(json.dumps(pump), broadcast=True)

    for button in buttons:
        button.when_pressed = pulse_fc
        button.when_released = pulse_fc

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


Thread(target=volume_counter if rpi else send_status_debug, args=[]).start()


def time_counter():
    global pumps_config, pumps
    time_step = 0.1

    while True:
        if rpi:
            for i, pump in enumerate(pumps):
                pump.on() if pumps_config[i]['on'] else pump.off()

        for pump in pumps_config:
            if pump['on']:
                pump['time_count'] += time_step

                if pump['time_count'] >= pump['timeout']:
                    pump['time_count'] = round(pump['time_count'], 1)
                    print('... time stopping pump', pump['id'])
                    pump['on'] = False
                    socketio.send(json.dumps(pump), broadcast=True)

        sleep(time_step)


Thread(target=time_counter, args=[]).start()


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


def stop_pump(id):
    global pumps_config
    pump = pumps_config[id]
    pump['on'] = False
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


@socketio.on('message')
def handle_message(msg):
    print("Message: " + msg)


app.run(debug=False, port=port)
