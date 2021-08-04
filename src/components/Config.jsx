import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useContext } from 'react';
import { PumpsContext } from '../js/PumpsContext';
import RecipeConfig from './RecipeConfig';

const Config = () => {
          
  const {pumps, setPumps} = useContext(PumpsContext)
  
  const handleChange = () => {
    console.log('...')
  }

  const recipes = [
    {
      name: 'Ounce',
      pumps: [
        { id: 0, volume: 0}, { id: 1, volume: 0}, { id: 2, volume: 0}, { id: 3, volume: 0},
      ]
    },
    {
      name: 'Pint',
      pumps: [
        { id: 0, volume: 0}, { id: 1, volume: 0}, { id: 2, volume: 0}, { id: 3, volume: 0},
      ]
    }
  ]

  const selected = 0

  return (
    <div className="columns">
      <div className="menu column is-one-fifth">
        <p className="menu-label has-text-link">
          <a>Recipes</a>
        </p>
        <ul className="menu-list">
          {recipes.map(recipe => (
            <li>
              <a>
                <span className="has-text-link">
                  <FontAwesomeIcon icon={faVial} />
                </span>
                <span className="ml-2">{recipe.name}</span>
              </a>
            </li>
          ))}
          <li>
            <a>
              <span className="has-text-link">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span className="ml-2">Add recipe</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="column">
        <div className="columns">
          <RecipeConfig recipe={recipes[0]}/>
        </div>
      </div>
    </div>
  )
};

export default Config;
