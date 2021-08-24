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
  const setPumpMessage = useStoreActions(actions => actions.setPumpMessage)
  const pumpsInitialState = [{},{},{},{}]
  
  useEffect(() => {
    const updatePumps = pump => {
      pumpsInitialState[pump.id] =  {...pumpsInitialState[pump.id], ...pump}
      setPumpsState([...pumpsInitialState])
    }
    
    socket.on('message', msg => {
      let objMsg = JSON.parse(msg)
      updatePumps(objMsg); console.log(objMsg); setPumpMessage(objMsg)
    })

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
