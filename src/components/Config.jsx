import CardConfig from "./CardConfig";
import { useContext } from 'react';
import { PumpsContext } from '../js/PumpsContext';

const Config = () => {
          
  const {pumps, setPumps} = useContext(PumpsContext)
  
  const handleChange = () => {
    console.log('...')
  }

  return (
    <div className="columns">
      {pumps.map(pump => (
        <CardConfig key={pump.id} pump={pump}/>
      ))}
    </div>
  )
};

export default Config;
