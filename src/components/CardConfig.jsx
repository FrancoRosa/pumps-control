import { useState, useContext } from "react";
import { PumpsContext } from "../js/PumpsContext";
import Input from "./Input";

const CardConfig = ({ pump }) => {
  const {pumps, setPumps} = useContext(PumpsContext)
  
  const [timeout, setTimeout] = useState(pump.timeout)
  const [volume, setVolume] = useState(pump.pulses*pump.vol_per_pulse)
  const [vol_per_pulse, setVolPerPulse] = useState(pump.vol_per_pulse)
  
  const saveConfig = () => {
    const pulses = parseInt(volume/vol_per_pulse)
    pumps[pump.id] = {...pump, timeout, pulses, vol_per_pulse}
    setPumps([...pumps])
  }

  return (
    <div className="column">
      <div className="card m-4 p-4">
        <header className="card-header">
          <p className="card-header-title title is-3 is-centered">
            {pump.name}
          </p>
        </header>
        <div className="card-content">
          <Input label="Timeout" 
            value={timeout} placeholder="Time in seconds"
            changed={pump.timeout != timeout} 
            setValue={setTimeout}/>
          <Input label="Volume" 
            value={volume} placeholder="Volume in fl oz" 
            changed={pump.pulses*pump.vol_per_pulse != volume} 
            setValue={setVolume}/>
          <Input label="Volume per Pulse"
            value={vol_per_pulse} placeholder="Volume in fl oz" 
            changed={pump.vol_per_pulse != vol_per_pulse} 
            setValue={setVolPerPulse}/>
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