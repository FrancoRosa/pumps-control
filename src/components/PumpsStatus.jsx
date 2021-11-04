import { faStopwatch, faVial } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { percent, progress } from "../js/helpers";

const PumpsStatus = () => {
  const pumps = useStoreState((state) => state.pumps);
  const pumpsState = useStoreState((state) => state.pumpsState);
  const [working, setWorking] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [time, setTime] = useState(false);

  useEffect(() => {
    setWorking(pumpsState.map((p) => p.on).reduce((a, b) => a || b));
    const maxTimeout = Math.max(...pumpsState.map((p) => p.timeout));
    setMaxTime(maxTimeout);
  }, [pumpsState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (working) {
      setCurrentTime(currentTime + 1);
    } else {
      setCurrentTime(0);
    }
  }, [time]);

  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column is-half">
        <div className="columns">
          {pumps.map((pump) => (
            <div key={pump.id} className="column p-2">
              <h4
                className={`heading has-text-centered ${
                  pumpsState[pump.id].on ? "has-text-danger" : "has-text-link"
                }`}
              >
                {pump.name}
              </h4>
              {pumpsState[pump.id].timeout != 0 ? (
                <p className="has-text-centered">
                  {percent(
                    pumpsState[pump.id].pulses_count,
                    pumpsState[pump.id].pulses
                  )}{" "}
                  %
                </p>
              ) : (
                <p className="has-text-centered">- -</p>
              )}
            </div>
          ))}
        </div>
        <div className="is-flex">
          <progress
            className={`progress is-small ${
              working ? "is-success" : "is-dark"
            }`}
            max="100"
            value={progress(pumpsState)}
          />
          <FontAwesomeIcon icon={faVial} className="ml-4" pulse={working} />
        </div>

        <div className="is-flex m-0">
          <progress
            className={`progress md-0 p-0 mt-0 is-small ${
              working ? "is-success" : "is-dark"
            }`}
            max={maxTime}
            value={currentTime}
          />
          <FontAwesomeIcon
            icon={faStopwatch}
            className="ml-4"
            pulse={working}
          />
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
};

export default PumpsStatus;
