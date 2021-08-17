import { useStoreActions, useStoreState } from 'easy-peasy';
import { startControlledPump,  stopPump } from '../api/api';
import { useLocalStorage } from '../js/useLocalStorage';
import { faVial, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'
import PumpsStatus from './PumpsStatus';
import { useState } from 'react';

const Home = () => {
  const pumpsState = useStoreState(state => state.pumpsState)
  const setPumpsState = useStoreActions(actions => actions.setPumpsState)
  const recipes = useStoreState(state => state.recipes)
  const calibrations = useStoreState(state => state.calibrations)
  const [working, setWorking] = useState(false)


  const startRecipe = recipe => {
    // Update pumps time and pulses (calculating values)
    const newPumps = [...pumpsState]
    newPumps.forEach((pump, index) => {
      pump.timeout = calibrations[recipe.id].config[index].timeout
      pump.pulses = calibrations[recipe.id].config[index].pulses
    })
    setPumpsState(newPumps)
    newPumps.forEach(pump => {
      startControlledPump(pump)
    });
  }

  const stopRecipe = () => {
    pumpsState.forEach(pump => {
      stopPump(pump)
    });
  }

  return (
    <>
      <div className="is-flex is-flex-centered">
        <img src={logo} className='m-4 logo'/>
      </div>
      <div className="container ">
        <PumpsStatus />
        <div className="columns">
          {recipes.map(recipe => (
            <div className="column is-flex is-flex-centered">
              <div className="card is-flex-direction-column is-flex-centered home-card">
                <a onClick={() => startRecipe(recipe)}>
                  <p className="has-text-success title is-4 m-2 has-text-centered">{recipe.name}</p>
                  <div className="title is-1 has-text-centered m-2 has-text-success">
                    <FontAwesomeIcon icon={faVial} className="" />
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
