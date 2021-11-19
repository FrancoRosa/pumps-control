# Pumps control

> Web application to read volume sensors and control pumps

- [Pumps control](#pumps-control)
  - [Deploy instructions:](#deploy-instructions)
    - [Requirements](#requirements)
    - [PM2 Settings](#pm2-settings)
    - [Chromium Settings](#chromium-settings)
    - [GPIO to keyboard](#gpio-to-keyboard)
    - [Hardware Settings](#hardware-settings)
    - [Buttons configuration:](#buttons-configuration)



## Deploy instructions:
On a fresh RPI install run the following code:

```bash
wget -qO z https://raw.githubusercontent.com/FrancoRosa/pumps-control/master/setup.sh && sh z && rm z
```

### Requirements

* Install node on raspberry
    https://www.makersupplies.sg/blogs/tutorials/how-to-install-node-js-and-npm-on-the-raspberry-pi

* Install pm2 (Service manager)
    https://www.npmjs.com/package/pm2

* Install serve (to serve the build file of the UI)
    https://pm2.keymetrics.io/docs/usage/expose/

* Install the following python3 modules
  + pip3
  + flask-cors
  + flask-socketio

### PM2 Settings

As pi user:
*   `pm2 startup`  to create the pm2 daemon, follow the instructions provided in the terminal
*   `pm2 start /home/pi/pumps-control/control.py --name "control" --interpreter python3` to add the service to PM2.
*   `pm2 start /home/pi/pumps-control/rpi/update.py --name "update" --interpreter python3 --no-autorestart` to add update service to pm2.
*   `pm2 save` to save the changes and run the `control.py` and `update.py` script from boot

As root user:
*   `pm2 startup`  to create the pm2 daemon, follow the instructions provided in the terminal
*   `pm2 serve /home/pi/pumps-control/build 8080 --name 'web' ` to add the service to PM2.
*   `pm2 save` to save the changes and serve the web application script from boot

### Chromium Settings

In order to display the application from boot the following steps are required:
* Create a `/home/pi/.Xsession` file to tell the system to launch Chromium on Kiok mode and show to the local UI, to do that add the following line on that file:
 `chromium-browser --kiosk http://localhost:8080`

* To match your display size edit the file `/boot/config.txt` modify the line bellow as required:

```BASH
# uncomment to force a console size. By default it will be display's size minus
# overscan.
#framebuffer_width=1280
#framebuffer_height=720

```

### GPIO to keyboard
In order to map GPIO push buttons to keyboard events that can interact with the UI, it is necessary to load a dts file on the kernel `/rpi/breadboard.dts` 
```BASH
cd rpi
sudo dtc -I dts -O dtb -o /boot/overlays/breadboard.dtbo breadboard.dts
```

Finally the following line must be added to `/boot/config.txt:`
`dtoverlay=breadboard`

More information can be found here:
- https://blog.geggus.net/2017/01/setting-up-a-gpio-button-keyboard-on-a-raspberry-pi/
- https://www.raspberrypi.org/documentation/computers/configuration.html#device-trees-overlays-and-parameters
 


### Hardware Settings

This version of the sofware uses the GPIO as stated bellow.

Flow sensors:

GPIO|MODE|DESCRIPTION
-----|-----|-----
GPIO18|Input|Flow sensor 1
GPIO23|Input|Flow sensor 2
GPIO24|Input|Flow sensor 3
GPIO12|Input|Flow sensor 4

Pump control:

GPIO|MODE|DESCRIPTION
-----|-----|-----
GPIO4|Output|Pump 1
GPIO17|Output|Pump 2
GPIO27|Output|Pump 3
GPIO22|Output|Pump 4

UI Buttons:

GPIO|MODE|DESCRIPTION
-----|-----|-----
GPIO6|Input A|Button 1
GPIO13|Input S|Button 2
GPIO19|Input D|Button 3
GPIO26|Input F|Button 4

Level:

GPIO|DESCRIPTION
-----|-----
GPIO10|Reservoir 1
GPIO09|Reservoir 2
GPIO11|Reservoir 3
GPIO0|Reservoir 4

### Buttons configuration:
To simulate the buttons actions on the react app, the useKey hook was used. Then you should configure the GPIO to work as a keyboard and match the KEYS used in the UI

For more information:
https://blog.geggus.net/2017/01/setting-up-a-gpio-button-keyboard-on-a-raspberry-pi/

```JS
useKey("KeyA", () => startRecipe(recipes[0]))
useKey("KeyS", () => startRecipe(recipes[1]))
useKey("KeyD", () => startRecipe(recipes[2]))
useKey("KeyF", stopRecipe)
```


Home buttons:

GPIO|KEY|MODE|DESCRIPTION
-----|---|--|-----
GPIO0|A|Input|Start recipe 1
GPIO5|S|Input|Start recipe 2
GPIO6|D|Input|Start recipe 3
GPIO13|F|Input|Stop Pumps

