from flask import Flask
from flask_socketio import SocketIO, send
from flask_cors import CORS
from time import sleep
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
  {'id': 0, 'pulses': 123, 'on': False, 'timeout':10, 'count': 0},
  {'id': 1, 'pulses': 323, 'on': False, 'timeout':10, 'count': 0},
  {'id': 2, 'pulses': 123, 'on': True,  'timeout':10, 'count': 0},
  {'id': 3, 'pulses': 223, 'on': False, 'timeout':10, 'count': 0},
]
# 
def send_status_rpi():
  t = 0
  while True:
    print('... rpi')
    sleep(5)        

def send_status_debug():
  
  while True:
    t = t+1
    socketio.send(json.dumps({'t': t}), broadcast=True)
    sleep(1)        


Thread(target=send_status_rpi if rpi else send_status_debug, args=[]).start()

@app.route('/')
def index():
  return "... control server running on port %s"%port

@app.route('/api/start/<id>')
def start(id):
  return "... starting %s pump"%id

@socketio.on('message')
def handle_message(msg):
  print("Message: " + msg)


app.run(debug=True, port=port)