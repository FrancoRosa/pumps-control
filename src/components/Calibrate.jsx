import CardManual from "./CardManual";
import CalibInstructions from "./CalibInstructions.jsx";
import { useLocalStorage } from "../js/useLocalStorage";
import { useStore, useStoreState } from "easy-peasy";

const Calibrate = () => {
  const pumps = useStoreState(state => state.pumps)
  const calibrationsInit = [
    { id: 0, pulses_per_volume: 6, timeout: 8 },
    { id: 1, pulses_per_volume: 6, timeout: 8 },
    { id: 2, pulses_per_volume: 7, timeout: 8 },
    { id: 3, pulses_per_volume: 7, timeout: 8 },
  ]

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
