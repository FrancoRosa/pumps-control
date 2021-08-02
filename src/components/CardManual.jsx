import { useState, useContext, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { PumpsContext } from "../js/PumpsContext";
import { getTimestamp } from "../js/helpers";
import Input from "./Input";

const CardManual = ({ pump }) => {
  const { pumps, setPumps } = useContext(PumpsContext)
  const { id } = pump
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [start, setStart] = useState(getTimestamp())
  const [end, setEnd] = useState(getTimestamp())
  let counting = false

  useEffect(() => {
    if (running) setSeconds(end-start)
  }, [end])


  useEffect(() => {
    setInterval(() => {
      setEnd(getTimestamp())
    }, 100)
  })

  const startCount = () => {
    setStart(getTimestamp())
    setRunning(true)
  }

  const stopCount = () => {
    setEnd(getTimestamp())
    setRunning(false)
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
        <p className="title is-3 success has-text-centered">{seconds.toFixed(1)}</p>
        <p className="has-text-link heading has-text-centered mt-4">Pulses</p>
        <p className="title is-3 success has-text-centered">0</p>
        <div className="card-content is-flex is-justify-content-center m-0 p-0">
          <button
            className="button m-2 is-medium"
            onClick={startCount}
          >
            Start
          </button>
          <button
            className="button m-2 is-medium"
            onClick={stopCount}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardManual