import CardManual from "./CardManual";
import { useContext } from 'react';
import { PumpsContext } from '../js/PumpsContext';

const Calibrate = () => {
          
  const {pumps, setPumps} = useContext(PumpsContext)
  
  const handleChange = () => {
    console.log('...')
  }

  return (
    <div className="columns">
      {pumps.map(pump => (
        <CardManual key={pump.id} pump={pump}/>
      ))}
    </div>
  )
};

export default Calibrate;
