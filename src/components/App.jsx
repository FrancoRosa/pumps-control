import { Switch, Redirect, Route } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import io from "socket.io-client";
import Tabs from './Tabs';
import Home from './Home';
import Config from './Config';
import Calibrate from './Calibrate';
import { PumpsContext } from '../js/PumpsContext';
const socket = io.connect('http://localhost:9999');

const pumpsInitialState = [
  { id: 0, name: 'Pump 1', total_pulses: 123, on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count: 0, vol_per_pulse: 1.2},
  { id: 1, name: 'Pump 2', total_pulses: 123, on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count: 0, vol_per_pulse: 1.3},
  { id: 2, name: 'Pump 3', total_pulses: 123, on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count: 0, vol_per_pulse: 1.2},
  { id: 3, name: 'Pump 4', total_pulses: 123, on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count: 0, vol_per_pulse: 1.1},
]

const App = () => {
  const [pumps, setPumps] = useState(pumpsInitialState)
  
  useEffect(() => {
    const updatePumps = msg => {
      const pump = JSON.parse(msg);
      pumpsInitialState[pump.id] =  {...pumpsInitialState[pump.id], ...pump}
      setPumps([...pumpsInitialState])
    }
    
    socket.on('message', msg => updatePumps(msg))

    return () => {
      socket.off('message');
    };
  }, []);
  
  return (
    <>
      <Tabs />
        <p className="success"></p>
        <Redirect exact from="/" to="/home" />
        <div className="container">
          <PumpsContext.Provider value={{ pumps, setPumps}}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/config" component={Config} />
              <Route path="/Calibrate" component={Calibrate} />
            </Switch>
          </PumpsContext.Provider>
        </div>
    </>
  );
}

export default App;
