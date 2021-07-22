const CardHome = ({pump, handleClick}) => {
  const {name, on, pulses_count, time_count} = pump;
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
          <p>Volume send: {pulses_count}</p>
          {time_count === 0 ? '': <p>Time elapsed: {time_count.toFixed(0)} s</p>}
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