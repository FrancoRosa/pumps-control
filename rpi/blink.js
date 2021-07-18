const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const LEDs = [
  new Gpio(4, 'out'),
  new Gpio(17, 'out'),
  new Gpio(27, 'out'),
  new Gpio(22, 'out'),
]

const blinkLED = led => { //function to start blinking
  if (led.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    led.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    led.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

LEDs.forEach(led => {
  setInterval(blinkLED, 250, led); //run the blinkLED function every 250ms
});