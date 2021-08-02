import { useState, useContext, useRef } from "react";
import { PumpsContext } from "../js/PumpsContext";
import Input from "./Input";

const CardManual = ({ pump }) => {
  const {pumps, setPumps} = useContext(PumpsContext)
  const { id } = pump
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  var counter = 0

  const updateStopWatch = () => {
    counter = counter + 0.500
    setSeconds(counter.toFixed(1));
  } 

  
  const handleTimer = () => {
    let timer = null
    
    if (!running){
      console.log('start')
      counter = 0
      setSeconds(counter)
      setRunning(true)
      timer = setInterval(updateStopWatch, 500)
    } else {
      console.log('stop')
      setRunning(false)
      clearInterval(timer)
    }
  }

  return (
    <div className="column">
      <div className="card m-4">
        <header className="card-header">
          <p className="card-header-title title is-3 is-centered">
            {pump.name}
          </p>
        </header>
        <p>{running ? 'running' : 'stopped'}</p>
        <p className="has-text-link heading has-text-centered mt-4">Stopwatch</p>
        <p className="title is-3 success has-text-centered">{seconds}</p>
        <p className="has-text-link heading has-text-centered mt-4">Pulses</p>
        <p className="title is-3 success has-text-centered">0</p>
        <div className="card-content is-flex is-justify-content-center m-0 p-0">
          <button
            className="button m-2 is-medium"
            onClick={handleTimer}
          >
            {running ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardManual