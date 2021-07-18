from gpiozero import LED, Button
from signal import pause
from time import sleep

pumps = [
  LED(4),
  LED(17),
  LED(27),
  LED(22)
]

buttons = [
  Button(18),
  Button(23),
  Button(24),
  Button(12)
]


# while True:
#     for i, pump in enumerate(pumps):
#       print('... pump:', i)
#       pump.on()
#       sleep(.1)
#       pump.off()
#       sleep(.2)


for i, button in enumerate(buttons):
    button.when_pressed = pumps[i].on
    button.when_released = pumps[i].off

pause()
