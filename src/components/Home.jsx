import { useContext, useEffect,  } from 'react';
import { startControlledPump } from '../api/api';
import { PumpsContext } from '../js/PumpsContext';
import CardHome from './CardHome'

const Home = () => {

  const handleClick = pump => {
    startControlledPump(pump).then(resp => console.log(resp))
  }

  const {pumps, setPumps} = useContext(PumpsContext)
 
  return (
    <>
      <h1 className="title is-2 has-text-centered">DECON SEVEN</h1>
      <div className="columns">
        {pumps.map(pump => (
          <CardHome key={pump.id} pump={pump} handleClick={() => handleClick(pump)}/>
        ))}
      </div>
    </>
  )
};

export default Home;
