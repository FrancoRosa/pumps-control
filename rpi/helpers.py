from subprocess import check_output
from os import uname
from re import search
from datetime import datetime
from requests import get
import shelve

from requests.exceptions import Timeout

default_server = 'http://us-central1-decon7-admin.cloudfunctions.net'
connection_server = 'http://google.com'


def is_connected():
    try:
        get(connection_server, timeout=2)
        return True
    except Timeout:
        return False


print(is_connected())


def getDate():
    return str(datetime.utcnow().date())


def getTime():
    return str(datetime.utcnow().time())


def is_time(str):
    current = getTime()
    print(current.split('.')[0])
    return str in current


def save_record(values, date=getDate()):
    s = shelve.open('records.db')
    s[date] = values
    s.close()


def get_records():
    s = shelve.open('records.db')
    result = []
    if len(s.keys()) > 0:
        for key in s:
            row = s[key]
            row.insert(0, key)
            result.append(row)
    s.close()
    return result


def remove_records():
    s = shelve.open('records.db')
    if len(s.keys()) > 0:
        for key in s:
            s.pop(key)
    s.close()


def save_server(server):
    s = shelve.open('server.db')
    try:
        s['server'] = server
    finally:
        s.close()


def get_server():
    s = shelve.open('server.db')
    try:
        server = s['server']
    except:
        s['server'] = default_server
        server = default_server
    s.close()
    return server


is_rpi = uname()[4] != 'x86_64'


def device_restart():
    check_output(['reboot', 'now'])


def device_shutdown():
    check_output(['shutdown', 'now'])


def get_wifi_card():
    # If card is currently connected to network
    info = check_output(['ip', 'route', 'list'])
    info = info.decode('ascii').split(' ')
    for text in info:
        if search('^wl', text):
            return text

    # If card is not connected to network
    info = check_output(['ip', 'link', 'show'])
    lines = info.decode('ascii').split('\n')
    lines.reverse()
    for line in lines:
        for text in line.split(': '):
            if search('^wl', text):
                return text


def chunks(lst, n):
    return [lst[i:i + n] for i in range(0, len(lst), n)]


def insert_dash(text, group_len):
    return '-'.join(chunks(text, group_len))


def get_device_id():
    info = check_output(['cat', '/proc/cpuinfo'])
    lines = info.decode('ascii').split('\n')
    for line in lines:
        if search('^Serial', line):
            serial = line.split(': ')[1]
            return insert_dash(serial, 4)


def scan_wifi():
    card = get_wifi_card()
    command_output = check_output(['iwlist', card, 'scan'])
    text_output = command_output.decode('ascii').split('\n')
    result = []
    for text in text_output:
        if 'Signal level=' in text:
            snr = text.split('Signal level=')[1]
        if 'ESSID:' in text:
            ssid = text.split(':')[1]

            result.append({
                'ssid': ssid,
                'snr': snr
            })
    return result


def network_conf(ssid, passwd):
    file = open('/etc/wpa_supplicant/wpa_supplicant.conf', 'w')
    config = (
        'ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\n'
        'country=US\n'
        'update_config=1\n'
        '\n'
        'network={\n'
        f' ssid="{ssid}"\n'
        f' psk="{passwd}"\n'
        ' scan_ssid=1\n'
        '}\n'
        '\n'
    )
    file.write(config)
    file.close()
    card = get_wifi_card()
    check_output(['wpa_cli', '-i', card, 'reconfigure'])
