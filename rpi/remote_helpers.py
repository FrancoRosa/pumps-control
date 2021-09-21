from keyboard import record, send
from requests import get, post
from datetime import datetime
from time import time
from json import dumps
from shelve import open
from helpers import get_device_id, is_rpi

default_server = 'https://us-central1-decon7-admin.cloudfunctions.net'
connection_server = 'http://google.com'


def is_connected():
    try:
        get(connection_server, timeout=2)
        return True
    except:
        return False


def getDate():
    return str(datetime.utcnow().date())


def getTime():
    return str(datetime.utcnow().time())


def getTime():
    return str(datetime.utcnow().time())


def timestamp():
    return int(time())


def is_time(str):
    current = getTime()
    print(current.split('.')[0])
    return str in current


def save_record(values, date=getDate()):
    s = open('records.db')
    s[date] = values
    s.close()


def get_records():
    s = open('records.db')
    result = []
    if len(s.keys()) > 0:
        for key in s:
            row = s[key]
            row.insert(0, key)
            result.append(row)
    s.close()
    return result


def remove_records():
    s = open('records.db')
    if len(s.keys()) > 0:
        for key in s:
            s.pop(key)
    s.close()


def save_server(server):
    s = open('server.db')
    try:
        s['server'] = server
    finally:
        s.close()


def get_server():
    s = open('server.db')
    try:
        server = s['server']
    except:
        s['server'] = default_server
        server = default_server
    s.close()
    return server


def save_pulses(pulses):
    s = open('pulses.db')
    try:
        s['pulses'] = pulses
    finally:
        s.close()


def get_pulses():
    s = open('pulses.db')
    try:
        pulses = s['pulses']
    except:
        s['server'] = [0, 0, 0, 0]
        pulses = [0, 0, 0, 0]
    s.close()
    return pulses


def send_measurements(pump_counts, notification, reservoirs):
    url = get_server()+'/measurements'
    id = get_device_id() if is_rpi else 'debug'
    payload = {
        "id": id,
        "notification": notification,
        "reservoirs": reservoirs,
        "last_measurement": {
            "values": pump_counts,
            "timestamp": timestamp()
        }
    }
    try:
        print('url:', url)
        print('payload:', payload)
        response = post(url, json=payload)
        return response.status_code == 200
    except:
        return False


def send_records():
    url = get_server()+'/records'
    id = get_device_id() if is_rpi else 'debug'
    records = get_records()
    if len(records) > 0:
        payload = {
            "id": id,
            "records": records
        }
        try:
            print('url:', url)
            print('payload:', payload)
            response = post(url, json=payload)
            if response.status_code == 200:
                remove_records()
                return True
        except:
            return False
    return True


def cloud_backup(pump_counts, notification, reservoirs):
    if is_connected:
        send_measurements(pump_counts, notification, reservoirs)
        send_records()
        return True

    save_record(pump_counts)
    return False
