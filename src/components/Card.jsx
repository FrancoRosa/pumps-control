const Card = ({pump, handleClick}) => {
  const {name, on} = pump;
  return (
    <div className="column">
      <div class="card m-4 p-4">
        <header class="card-header">
          <p class="card-header-title title is-3 is-centered">
            {name}
          </p>
        </header>
        <div className="card-content">
          <span>Current status:  </span>
          <span className={`content ${on ? 'has-text-danger':'has-text-success'}`}>
            {on ? 'On': 'Off'}
          </span>
        </div>
        <footer class="card-footer">
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

export default Card