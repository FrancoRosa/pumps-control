import { action } from "easy-peasy"

const initial = {
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
  calibrations: [
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
  timeTolerance: 5,
  wifissid: 'wifi name',
  wifipass: 'wifi password'
}

const getSavedStorage = key => {
  return JSON.parse(window.localStorage.getItem(key)) || initial[key]
}

export default {
  recipes: getSavedStorage('recipes'),
  setRecipes: action((state, recipes) =>  { state.recipes = [...recipes] }),
  
  pumps: getSavedStorage('pumps'),
  setPumps: action((state, pumps) =>  { state.pumps = [...pumps] }),
  
  calibrations: getSavedStorage('calibrations'),
  setCalibrations: action((state, calibrations) =>  { state.calibrations = [...calibrations] }),
  
  pumpsState: getSavedStorage('pumpsState'),
  setPumpsState: action((state, pumpsState) =>  { state.pumpsState = [...pumpsState] }),
  
  timeTolerance: getSavedStorage('timeTolerance'),
  setTimeTolerance: action((state, timeTolerance) =>  { state.timeTolerance = timeTolerance }),

  wifissid: getSavedStorage('wifissid'),
  setWifissid: action((state, wifissid) =>  { state.wifissid = wifissid }),
  wifipass: getSavedStorage('wifipass'),
  setWifipass: action((state, wifipass) =>  { state.wifipass = wifipass }),

  pumpMessage: {},
  setPumpMessage: action((state, message) =>  { state.pumpMessage = message }),

}