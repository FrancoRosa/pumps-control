import { useContext } from 'react';
import { startControlledPump,  stopPump } from '../api/api';
import { PumpsContext } from '../js/PumpsContext';
import { useLocalStorage } from '../js/useLocalStorage';
import { faVial, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'

const Home = () => {

  const handleClick = pump => {
    startControlledPump(pump).then(resp => console.log(resp))
  }

  const {pumps, setPumps} = useContext(PumpsContext)
 
  const calibrationsInit = [
    { id: 0, pulses_per_volume: 6, timeout: 8 },
    { id: 1, pulses_per_volume: 6, timeout: 8 },
    { id: 2, pulses_per_volume: 7, timeout: 8 },
    { id: 3, pulses_per_volume: 7, timeout: 8 },
  ]
  
  const recipes = [
    {name: 'Recipe 1'},
    {name: 'Recipe 2'},
    {name: 'Recipe 3'}
  ]

  const [calibrations, setCalibrations] = useLocalStorage('calibrations', calibrationsInit)


  const startRecipe = recipe => {
    // Update pumps time and pulses (calculating values)
    const newPumps = [...pumps]
    newPumps.forEach((pump, index) => {
      pump.timeout = calibrations[index].timeout*recipe.pumps[index].volume
      pump.pulses = calibrations[index].pulses_per_volume*recipe.pumps[index].volume
    })
    setPumps(newPumps)
    newPumps.forEach(pump => {
      startControlledPump(pump)
    });
  }

  const stopRecipe = () => {
    pumps.forEach(pump => {
      stopPump(pump)
    });
  }

  return (
    <>
      <div className="is-flex is-flex-centered">
        <img src={logo} className='m-4 logo'/>
      </div>
      <div className="container ">
        <div className="columns">
          {recipes.map(recipe => (
            <div className="column is-flex is-flex-centered">
              <div className="card is-flex-direction-column is-flex-centered home-card">
                <a onClick={() => startRecipe(recipe)}>
                  <p className="has-text-success title is-4 m-2 has-text-centered">{recipe.name}</p>
                  <div className="title is-1 has-text-centered m-2 has-text-success">
                    <FontAwesomeIcon icon={faVial} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        <div className="column is-one-quarter is-flex is-flex-centered">
          <div className="card is-flex-direction-column is-flex-centered">
            <a onClick={stopRecipe}>
              <p className="has-text-danger title is-4 m-4 has-text-centered">Stop</p>
              <div className="title is-1 has-text-centered m-4 has-text-danger">
                <FontAwesomeIcon icon={faHandPaper} />
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
};

export default Home;
