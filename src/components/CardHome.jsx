const CardHome = ({pump, handleClick}) => {
  const {name, on} = pump;
  return (
    <div className="column">
      <div className="card m-4 p-4">
        <header className="card-header">
          <p className="card-header-title title is-3 is-centered">
            {name}
          </p>
        </header>
        <div className="card-content">
          <span>Current status:  </span>
          <span className={`content ${on ? 'has-text-danger':'has-text-success'}`}>
            {on ? 'On': 'Off'}
          </span>
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