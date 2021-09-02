from subprocess import run


def create_network_conf(ssid, passwd):
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
    run('wpa_cli -i {} reconfigure'.format(card))


def get_wifi_card():
    info = run('ip route list', capture_output=True)
    info = str(info.stdout).split(' ')
    for text in info:
        if 'wlan' in text:
            return text


print(create_network_conf('ssid', 'estas'))
