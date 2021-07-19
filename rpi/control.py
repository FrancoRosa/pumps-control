from flask import Flask, request, jsonify, make_response
from flask_socketio import SocketIO, send
from flask_cors import CORS
from time import sleep, time
from threading import Thread
from os import uname
import json

rpi = uname()[4] != 'x86_64'

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app, cors_allowed_origins="*")

port = 9999

pumps_debug = [
  {'id': 0, 'total_pulses': 123, 'on': False, 'timeout':10, 'time_count': 0, 'pulses': 0, 'pulses_count':0},
  {'id': 1, 'total_pulses': 323, 'on': False, 'timeout':10, 'time_count': 0, 'pulses': 0, 'pulses_count':0},
  {'id': 2, 'total_pulses': 123, 'on': False, 'timeout':10, 'time_count': 0, 'pulses': 0, 'pulses_count':0},
  {'id': 3, 'total_pulses': 223, 'on': False, 'timeout':10, 'time_count': 0, 'pulses': 0, 'pulses_count':0},
]
# 
def send_status_rpi():
  t = 0
  while True:
    print('... rpi')
    sleep(5)        

def send_status_debug():
  global pumps_debug
  while True:
    for pump in pumps_debug:
      if pump['on']:
        pump['total_pulses'] += 1
        pump['time_count'] += 1
        pump['pulses_count'] += 1
      if pump['pulses_count'] >= pump['pulses'] or pump['time_count'] >= pump['timeout']:
        pump['on'] = False
        pump['pulses_count'] = 0
        pump['time_count'] = 0
      if pump['on']:
        socketio.send(json.dumps({
          'id': pump['id'],
          'pulses_count':pump['pulses_count'],
          'time_count':pump['time_count'],
        }), broadcast=True)
    sleep(1)        

Thread(target=send_status_rpi if rpi else send_status_debug, args=[]).start()

def start_pump(id, pulses, timeout):
  global pumps_debug
  pumps_debug[id]['pulses'] = pulses
  pumps_debug[id]['timeout'] = timeout
  pumps_debug[id]['on'] = True

@app.route('/')
def index():
  return "... control server running on port %s"%port

@app.route('/api/start', methods=['post'])
def start():
  config = request.get_json()
  id = int(config['id'])
  pulses = int(config['pulses'])
  timeout =  int(config['timeout'])
  start_pump(id, pulses, timeout)
  response = make_response(jsonify({
    "id": id,
    'total_pulses': pumps_debug[id]['total_pulses']
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/info/<id>')
def info(id):
  id = int(id)
  response = make_response(jsonify({
    "id": id,
    'total_pulses': pumps_debug[id]['total_pulses']
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@socketio.on('message')
def handle_message(msg):
  print("Message: " + msg)


app.run(debug=True, port=port)