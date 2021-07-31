import { useState, useContext } from "react";
import { PumpsContext } from "../js/PumpsContext";
import Input from "./Input";

const CardManual = ({ pump }) => {
  const {pumps, setPumps} = useContext(PumpsContext)
  const { id } = pump

  return (
    <div className="column">
      <div className="card m-4">
        <header className="card-header">
          <p className="card-header-title title is-3 is-centered">
            {pump.name}
          </p>
        </header>
        <p className="has-text-link heading has-text-centered mt-4">Stopwatch</p>
        <p className="title is-3 success has-text-centered">00:00</p>
        <p className="has-text-link heading has-text-centered mt-4">Pulses</p>
        <p className="title is-3 success has-text-centered">0</p>
        <div className="card-content is-flex is-justify-content-center m-0 p-0">
          <button
            className="button m-3"
            onClick={() => console.log('...start', id)}
          >
            Start
          </button>
          <button
            className="button m-3"
            onClick={() => console.log('...stop', id)}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardManual