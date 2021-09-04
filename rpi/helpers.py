from subprocess import run, check_output
from re import search


def device_restart():
    check_output(['reboot', 'now'])


def device_shutdown():
    check_output(['shutdown', 'now'])


def get_wifi_card():
    info = check_output(['ip', 'route', 'list'])
    info = info.decode('ascii').split(' ')
    for text in info:
        if search('^wl', text):
            return text


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
    print(result)


def network_conf(ssid, passwd):
    file = open('/etc/wpa_supplicant/wpa_supplicant.conf', 'r')
    config = (
        'ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\n'
        'country=US\n'
        'update_config=1\n'
        '\n'
        'network={\n'
        f' ssid="{ssid}"\n'
        f' psk="{passwd}"\n'
        ' scan_ssid=1'
        '}\n'
        '\n'
    )
    file.write(config)
    file.close()
    card = get_wifi_card()
    check_output(['wpa_cli', '-i', card, 'reconfigure'])
