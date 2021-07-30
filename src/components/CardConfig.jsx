import { useState } from "react";
import Input from "./Input";

const CardConfig = ({ pump, pumps}) => {
  const [timeout, setTimeout] = useState(pumps[pump].timeout)
  const [volume, setVolume] = useState(pumps[pump].pulses*pumps[pump].vol_per_pulse)
  const [vol_per_pulse, setVolPerPulse] = useState(pumps[pump].vol_per_pulse)
  
  const saveConfig = () => {
    console.log('test')
  }

  return (
    <div className="column">
      <div className="card m-4 p-4">
        <header className="card-header">
          <p className="card-header-title title is-3 is-centered">
            {pumps[pump].name}
          </p>
        </header>
        <div className="card-content">
          <Input label="Timeout" value={timeout} placeholder="Time in seconds" setValue={setTimeout}/>
          <Input label="Volume" value={volume} placeholder="Volume in fl oz" setValue={setVolume}/>
          <Input label="Volume per Pulse" value={vol_per_pulse} placeholder="Volume in fl oz" setValue={setVolPerPulse}/>
          <button
            className="button"
            onClick={saveConfig}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardConfig