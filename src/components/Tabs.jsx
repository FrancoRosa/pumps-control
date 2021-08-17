import { useEffect } from 'react';

import { 
  faHome,
  faStopwatch,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Tab from './Tab';
import io from "socket.io-client";

const socket = io.connect('http://localhost:9999');


const Tabs = () => {
  const pumpsState = useStoreState(state => state.pumpsState)
  const setPumpsState = useStoreActions(actions => actions.setPumpsState)
  const pumpsInitialState = [{},{},{},{}]
  
  useEffect(() => {
    const updatePumps = msg => {
      const pump = JSON.parse(msg);
      pumpsInitialState[pump.id] =  {...pumpsInitialState[pump.id], ...pump}
      setPumpsState([...pumpsInitialState])
    }
    
    socket.on('message', msg => updatePumps(msg))

    return () => {
      socket.off('message');
    };
  }, []);

  return (
    <div className="tabs is-centered is-small">
      <ul>
        <Tab name="Home" icon={faHome} />
        <Tab name="Config" icon={faTools} />
        <Tab name="Calibrate" icon={faStopwatch} />
      </ul>
    </div>
  )
}

export default Tabs;
