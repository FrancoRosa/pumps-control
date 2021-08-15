import { action } from "easy-peasy"

export default {
  recipes: [
    {id: 0, name: 'Recipe 1'},
    {id: 1, name: 'Recipe 2'},
    {id: 2, name: 'Recipe 3'}
  ],
  
  pumps: [
    {id: 0, name: 'Pump 1'},
    {id: 1, name: 'Pump 2'},
    {id: 2, name: 'Pump 3'},
    {id: 3, name: 'Pump 4'},
  ],
  
  calibration: [
    {
      id: 0,
      config: [ 
        {id: 0, pulses: 0, timeout: 0},
        {id: 1, pulses: 0, timeout: 0},
        {id: 2, pulses: 0, timeout: 0},
        {id: 3, pulses: 0, timeout: 0}
      ],
    },
    {
      id: 1,
      config: [ 
        {id: 0, pulses: 0, timeout: 0},
        {id: 1, pulses: 0, timeout: 0},
        {id: 2, pulses: 0, timeout: 0},
        {id: 3, pulses: 0, timeout: 0}
      ],
    },
    {
      id: 2,
      config: [ 
        {id: 0, pulses: 0, timeout: 0},
        {id: 1, pulses: 0, timeout: 0},
        {id: 2, pulses: 0, timeout: 0},
        {id: 3, pulses: 0, timeout: 0}
      ],
    },
  ],
  
  pumpsState: [
    { id: 0, total_pulses: 123, on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count: 0},
    { id: 1, total_pulses: 123, on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count: 0},
    { id: 2, total_pulses: 123, on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count: 0},
    { id: 3, total_pulses: 123, on: false, timeout: 5, pulses: 10, pulses_count: 0, time_count: 0},
  ],

  setPumpsState: action((state, pumpsState) =>  { state.pumpsState = [...pumpsState] }),
  timeTolerance: 5
}