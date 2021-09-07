import { useState, useEffect } from "react";
import { getTimestamp } from "../js/helpers";
import { startPump, stopPump, restartPump } from "../api/api";
import { useStoreActions, useStoreState } from "easy-peasy";

const CardManual = ({ pump, recipe }) => {
  const calibrations = useStoreState(state => state.calibrations)
  const setCalibrations = useStoreActions(actions => actions.setCalibrations)
  const pumpsState = useStoreState(state => state.pumpsState)
  const setPumpsState = useStoreActions(actions => actions.setPumpsState)
  const timeTolerance = useStoreState(state => state.timeTolerance)
  
  const [seconds, setSeconds] = useState(0)
  const [lastSeconds, setLastSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [start, setStart] = useState(getTimestamp())
  const [end, setEnd] = useState(getTimestamp())
  const [pulsesPerUnit, setPulsesPerUnit] = useState(calibrations[recipe.id].config[pump.id].pulses)
  const [fillTimeout, setFillTimeout] = useState(calibrations[recipe.id].config[pump.id].timeout)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setEnd(getTimestamp())
    }, 100)

    return () => clearInterval(timer);
  }, [])

  useEffect(() => {
    if (running) {
      let elapsed = end-start  
      setSeconds(elapsed)
      setFillTimeout((elapsed*(1 + timeTolerance/100)).toFixed(2));
      setPulsesPerUnit(pumpsState[pump.id].pulses_count)
    }
  }, [end])

  useEffect(() => {
    if (!running) {
      const newCalibrations = [...calibrations]
      newCalibrations[recipe.id].config[pump.id].pulses = pulsesPerUnit
      newCalibrations[recipe.id].config[pump.id].timeout = fillTimeout
      setCalibrations(newCalibrations)
    }
  }, [running])

  useEffect(()=>{
    setSeconds(0)
    setLastSeconds(0)
    resetPulses()
    setPulsesPerUnit(calibrations[recipe.id].config[pump.id].pulses)
    setFillTimeout(calibrations[recipe.id].config[pump.id].timeout)
  }, [recipe])

  const resetPulses = () => {
    let tempState = [...pumpsState]
    tempState[pump.id].pulses_count = 0
    setPumpsState(tempState)
  }

  const startCount = () => {
    if (seconds == 0) {
      startPump(pump).then(() => console.log('start pump'))
    } else {
      restartPump(pump).then(() => console.log('restart pump'))
    }
      setStart(getTimestamp()-lastSeconds)
    setRunning(true)
  }

  const stopCount = () => {
    setEnd(getTimestamp())
    setLastSeconds(seconds)
    stopPump(pump).then(() => console.log('stop pump'))
    setRunning(false)
  }

  const resetCount = () => {
    setSeconds(0)
    setFillTimeout(0)
    setPulsesPerUnit(0)
    stopPump(pump).then(() => console.log('stop pump'))
    setRunning(false)
    const newCalibrations = [...calibrations]
    newCalibrations[recipe.id].config[pump.id].pulses = 0
    newCalibrations[recipe.id].config[pump.id].timeout = 0
    setCalibrations(newCalibrations)
  }

  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title title is-5 is-centered">
            {pump.name}
          </p>
        </header>
        <div className="is-flex is-justify-content-space-around">
          <div>
            <p className="has-text-link heading has-text-centered mt-4 is-size-8">Time</p>
            <p className="title is-5 success has-text-centered">{seconds.toFixed(1)}</p>
          </div>
          <div>
            <p className="has-text-link heading has-text-centered mt-4 is-size-8">Pulses</p>
            <p className="title is-5 success has-text-centered">{pumpsState[pump.id].pulses_count}</p>
          </div>
        </div>
        <div className="card-content is-flex is-justify-content-center m-4 p-0 is-flex-direction-column">
          <button
            className="button mb-2 mt-2 pt-0 is-medium"
            onClick={running ? stopCount : startCount}
          >
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            className="button mb-2 mt-2 pt-0 is-medium"
            onClick={resetCount}
          >
            Reset
          </button>
        </div>
        <div className="card-footer is-flex-direction-column">
          <p className="heading has-text-link has-text-centered mt-3 is-size-8">Results</p>
          <div className="is-flex is-justify-content-space-around mb-2">
          <div>
            <p className="has-text-link heading has-text-centered mt-4 is-size-8">Timeout</p>
            <p className="title is-3 success has-text-centered">{fillTimeout}</p>
          </div>
          <div>
            <p className="has-text-link heading has-text-centered mt-4 is-size-8">Pulses</p>
            <p className="title is-3 success has-text-centered">{pulsesPerUnit}</p>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardManual