import CardConfig from "./CardConfig";
import { useContext } from 'react';
import { PumpsContext } from '../js/PumpsContext';

const Config = () => {
          
  const {pumps, setPumps} = useContext(PumpsContext)
  
  const handleChange = () => {
    console.log('...')
  }

  const recipes = [
    {
      name: 'ounce',
      pumps: [
        { id: 0, timeout: 0, volume: 0},
        { id: 1, timeout: 0, volume: 0},
        { id: 2, timeout: 0, volume: 0},
        { id: 3, timeout: 0, volume: 0},
      ]}
  ]

  return (
    <div className="columns">
      <div className="menu column is-one-fifth">
        <p className="menu-label has-text-link">
          <a>Recipes</a>
        </p>
      </div>
      <div className="column">
        <div className="columns">
          {pumps.map(pump => (
            <CardConfig key={pump.id} pump={pump}/>
            ))}
        </div>
      </div>
    </div>
  )
};

export default Config;
