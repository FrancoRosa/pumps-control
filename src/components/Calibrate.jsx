import CardManual from "./CardManual";
import CalibInstructions from "./CalibInstructions.jsx";
import { useContext } from 'react';
import { PumpsContext } from '../js/PumpsContext';
import { useLocalStorage } from "../js/useLocalStorage";

const Calibrate = () => {
  const calibrationsInit = [
    { id: 0, pulses_per_volume: 6, timeout: 8 },
    { id: 1, pulses_per_volume: 6, timeout: 8 },
    { id: 2, pulses_per_volume: 7, timeout: 8 },
    { id: 3, pulses_per_volume: 7, timeout: 8 },
  ]

  const {pumps, setPumps} = useContext(PumpsContext)
  const [calibrations, setCalibrations] = useLocalStorage('calibrations', calibrationsInit)
  
  return (
    <>
      <CalibInstructions />
      <div className="columns">
        {pumps.map(pump => (
          <CardManual key={pump.id} pump={pump}
          calibrations={calibrations} setCalibrations={setCalibrations}/>
        ))}
      </div>
    </>
  )
};

export default Calibrate;
