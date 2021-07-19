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

gpios = [
  'GPIO18',
  'GPIO23',
  'GPIO24',
  'GPIO12',
]


# while True:
#     for i, pump in enumerate(pumps):
#       print('... pump:', i)
#       pump.on()
#       sleep(.1)
#       pump.off()
#       sleep(.2)


def pressed_fc(button):
  print('button:',button.pin)
  pumps[gpios.index(str(button.pin))].on()

def released_fc(button):
  print('button:',button.pin)
  pumps[gpios.index(str(button.pin))].off()

for button in buttons:
    button.when_pressed = pressed_fc
    button.when_released = released_fc


pause()