import { useState, useContext, useEffect } from "react";
import { getTimestamp } from "../js/helpers";
import { startPump, stopPump } from "../api/api";
import { useLocalStorage } from '../js/useLocalStorage';

const CardManual = ({ pump, calibrations, setCalibrations }) => {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [start, setStart] = useState(getTimestamp())
  const [end, setEnd] = useState(getTimestamp())
  const [pulsesPerUnit, setPulsesPerUnit] = useState(calibrations[pump.id].pulses_per_volume)
  const [fillTimeout, setFillTimeout] = useState(calibrations[pump.id].timeout)
  const [calibrationVol, setCalibrationVol] = useLocalStorage("calibrationVol", 8);
  const [timeoutTolerance, setTimeoutTolerance] = useLocalStorage('timeoutTolerance', '5')
  
  useEffect(() => {
    const timer = setInterval(() => {
      setEnd(getTimestamp())
    }, 100)

    return () => clearInterval(timer);
  })

  useEffect(() => {
    if (running) {
      let elapsed = end-start  
      setSeconds(elapsed)
      setFillTimeout((elapsed*(1 + timeoutTolerance/100)).toFixed(2));
      setPulsesPerUnit(pump.pulses_count/parseInt(calibrationVol))
    }
  }, [end])

  useEffect(() => {
    if (!running) {
      const newCalibrations = [...calibrations]
      newCalibrations[pump.id].pulses_per_volume = pulsesPerUnit
      newCalibrations[pump.id].timeout = fillTimeout
      setCalibrations(newCalibrations)
    }
  }, [running])


  const startCount = () => {
    setStart(getTimestamp())
    startPump(pump).then(() => console.log('start pump'))
    setRunning(true)
  }

  const stopCount = () => {
    setEnd(getTimestamp())
    stopPump(pump).then(() => console.log('stop pump'))
    setRunning(false)
  }

  return (
    <div className="column">
      <div className="card m-2">
        <header className="card-header">
          <p className="card-header-title title is-3 is-centered">
            {pump.name}
          </p>
        </header>
        <div className="is-flex is-justify-content-space-around">
          <div>
            <p className="has-text-link heading has-text-centered mt-4">Stopwatch</p>
            <p className="title is-3 success has-text-centered">{seconds.toFixed(1)}</p>
          </div>
          <div>
            <p className="has-text-link heading has-text-centered mt-4">Pulses</p>
            <p className="title is-3 success has-text-centered">{pump.pulses_count}</p>
          </div>
        </div>
        <div className="card-content is-flex is-justify-content-center m-0 p-0">
          <button
            className="button mb-2 mt-2 pt-0 is-medium"
            onClick={running ? stopCount : startCount}
          >
            {running ? 'Stop' : 'Start'}
          </button>
        </div>
        <div className="card-footer is-flex-direction-column">
          <p className="heading has-text-link has-text-centered mt-3">Results</p>
          <div className="is-flex is-justify-content-space-around mb-2">
          <div>
            <p className="has-text-link heading has-text-centered mt-4">Pulses/Volume</p>
            <p className="title is-3 success has-text-centered">{pulsesPerUnit}</p>
          </div>
          <div>
            <p className="has-text-link heading has-text-centered mt-4">Pump timeout</p>
            <p className="title is-3 success has-text-centered">{fillTimeout}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardManual