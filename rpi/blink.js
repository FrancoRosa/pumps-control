const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const LEDs = [
  new Gpio(4, 'out'),
  new Gpio(17, 'out'),
  new Gpio(27, 'out'),
  new Gpio(22, 'out'),
]

const buttons = [
  new Gpio(18, 'in', 'rising', {debounceTimeout: 10}),
  new Gpio(23, 'in', 'rising', {debounceTimeout: 10}),
  new Gpio(24, 'in', 'rising', {debounceTimeout: 10}),
  new Gpio(12, 'in', 'rising', {debounceTimeout: 10}),
]

const buttonState = [0,0,0,0]

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

buttons.forEach((button, index) => {
  button.watch((err, val) => {
    console.log('... change')
    console.log(val, index)
  });
});


const unexportOnClose = () => { //function to run when exiting program
  LEDs.forEach(led => {
    led.writeSync(0); // Turn LED off
    led.unexport(); // Unexport LED GPIO to free resources
  });
  pushButton.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c