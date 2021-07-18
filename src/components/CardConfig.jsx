import Input from "./Input";

const CardConfig = ({pump, handleChange}) => {
  const {name, timeout, value, volume, volPerPulse} = pump;
  return (
    <div className="column">
      <div class="card m-4 p-4">
        <header class="card-header">
          <p class="card-header-title title is-3 is-centered">
            {name}
          </p>
        </header>
        <div className="card-content">
          <Input label="Timeout" value={timeout} placeholder="Time in seconds" handleChange={handleChange}/>
          <Input label="Volume" value={volume} placeholder="Volume in fl oz" handleChange={handleChange}/>
          <Input label="Volume per Pulse" value={volPerPulse} placeholder="Volume in fl oz" handleChange={handleChange}/>
        </div>
      </div>
    </div>
  );
};

export default CardConfig