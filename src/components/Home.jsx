import { startPump } from '../api/api';
import CardHome from './CardHome'
import io from "socket.io-client";
import { useEffect } from 'react';
import { useState } from 'react';
const socket = io.connect('http://localhost:9999');

const Home = () => {
  let initState = [
    { id: 0, name: 'Pump 1', on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count:0},
    { id: 1, name: 'Pump 2', on: false, timeout: 8, pulses: 5, pulses_count: 0, time_count:0 },
    { id: 2, name: 'Pump 3', on: false, timeout: 10, pulses: 7, pulses_count: 0, time_count:0 },
    { id: 3, name: 'Pump 4', on: false, timeout: 13, pulses: 6, pulses_count: 0, time_count:0 },
  ]
  let [pumps, setPumps] =  useState(initState)

  useEffect(()=>{
    socket.on('message', msg => updatePumps(msg))
  },[])

  const updatePumps = msg => {
    let pump = JSON.parse(msg);
    let id = pump.id
    pump = {... initState[id], ...pump}
    initState[id] = pump
    console.log(pump)
    setPumps(initState)
  }
  
  const handleClick = pump => {
    startPump(pump).then(resp => console.log(resp))
  }

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
