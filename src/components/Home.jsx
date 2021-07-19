import { startPump } from '../api/api';
import CardHome from './CardHome'
import io from "socket.io-client";
import { useEffect } from 'react';
import { useState } from 'react';
const socket = io.connect('http://localhost:9999');

const Home = () => {
  var [pumps, setPumps] =  useState([
      { id: 0, name: 'Pump 1', on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count:0},
      { id: 1, name: 'Pump 2', on: false, timeout: 8, pulses: 5, pulses_count: 0, time_count:0 },
      { id: 2, name: 'Pump 3', on: false, timeout: 10, pulses: 7, pulses_count: 0, time_count:0 },
      { id: 3, name: 'Pump 4', on: false, timeout: 13, pulses: 6, pulses_count: 0, time_count:0 },
  ])

  useEffect(()=>{
    socket.on('message', msg => {
      const {id, pulses_count, time_count, on} = JSON.parse(msg);
      console.log({id, on})
      let pump = {... pumps[id], pulses_count, time_count, on}
      let newPumps = [... pumps]
      newPumps[id] = pump
      console.log('##################')
      newPumps.forEach(element => {
        console.log(element)
      });
      setPumps(newPumps)
    })
  },[])

  
  
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
