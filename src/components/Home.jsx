import { useContext } from 'react';
import { startControlledPump,  stopPump } from '../api/api';
import { PumpsContext } from '../js/PumpsContext';
import { useLocalStorage } from '../js/useLocalStorage';
import { faVial, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const savedRecipes = [
    {
      name: 'Ounce',
      pumps: [
        { id: 0, volume: 6}, { id: 1, volume: 7}, { id: 2, volume: 8}, { id: 3, volume: 9},
      ]
    },
    {
      name: 'Pint',
      pumps: [
        { id: 0, volume: 1}, { id: 1, volume: 2}, { id: 2, volume: 3}, { id: 3, volume: 4},
      ]
    }
  ]

  const [calibrations, setCalibrations] = useLocalStorage('calibrations', calibrationsInit)
  const [recipes, setRecipes] = useLocalStorage('recipes', savedRecipes)


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
      <h1 className="title is-2 has-text-centered">DECON SEVEN</h1>
      <div className="container ">
        <div className="columns">
          {recipes.map(recipe => (
            <div className="column is-flex is-flex-centered">
              <div className="card is-flex-direction-column is-flex-centered home-card">
                <a onClick={() => startRecipe(recipe)}>
                  <p className="has-text-success title is-2 is-large m-4 has-text-centered">{recipe.name}</p>
                  <div className="title is-1 has-text-centered m-4 has-text-success">
                    <FontAwesomeIcon icon={faVial} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        <div className="column is-one-quarter is-flex is-flex-centered">
          <div className="card is-flex-direction-column is-flex-centered">
            <a onClick={stopRecipe}>
              <p className="has-text-danger title is-2 is-large m-4">Stop</p>
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
