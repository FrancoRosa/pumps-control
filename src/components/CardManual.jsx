import { useState, useContext, useEffect } from "react";
import { PumpsContext } from "../js/PumpsContext";
import { getTimestamp } from "../js/helpers";
import { startPump, stopPump } from "../api/api";

const CardManual = ({ pump }) => {
  const { pumps, setPumps } = useContext(PumpsContext)
  const { id } = pump
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [start, setStart] = useState(getTimestamp())
  const [end, setEnd] = useState(getTimestamp())

  useEffect(() => {
    const timer = setInterval(() => {
      setEnd(getTimestamp())
    }, 100)

    return () => clearInterval(timer);
  })

  useEffect(() => {
    if (running) setSeconds(end-start)
  }, [end])

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
      <div className="card m-4">
        <header className="card-header">
          <p className="card-header-title title is-3 is-centered">
            {pump.name}
          </p>
        </header>
        <p className="has-text-link heading has-text-centered mt-4">Stopwatch</p>
        <p className="title is-3 success has-text-centered">{seconds.toFixed(1)}</p>
        <p className="has-text-link heading has-text-centered mt-4">Pulses</p>
        <p className="title is-3 success has-text-centered">{pump.pulses_count}</p>
        <div className="card-content is-flex is-justify-content-center m-0 p-0">
          <button
            className="button m-2 is-medium"
            onClick={running ? stopCount : startCount}
          >
            {running ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardManual