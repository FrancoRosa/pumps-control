const CardHome = ({pump, handleClick}) => {
  const {name, on, pulses_count, time_count, vol_per_pulse} = pump;
  return (
    <div className="column">
      <div className="card m-4 p-4">
        <header className="card-header">
          <p className="card-header-title title is-3 is-centered">
            {name}
          </p>
        </header>
        <div className="card-content">
          <p>
            Current status: {' '}
            <span className={`content ${on ? 'has-text-danger':'has-text-success'}`}>
              {on ? 'Active': 'Off'}
            </span>
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
          <p>Volume send: {pulses_count.toFixed(1)}</p>
          {time_count == 0 ? '': <p>Time elapsed: {time_count.toFixed(1)} s</p>}
=======
          <p>Volume send: {pulses_count}</p>
          {time_count === 0 ? '': <p>Time elapsed: {time_count.toFixed(0)} s</p>}
>>>>>>> 9f6f6922eac6808839b1c60af8aa685c7dee05b7
=======
          <p>Volume send: {(pulses_count*vol_per_pulse).toFixed(1)}</p>
          <p>Time elapsed: {time_count.toFixed(1)} s</p>
>>>>>>> f1167c171b8f2f70504f86cc103e8557a06d4db7
        </div>
        <footer className="card-footer">
          <button 
            className={`button is-large is-outlined card-footer-item ${on && 'is-loading'}` }
            onClick={handleClick}
          >
            Start
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CardHome