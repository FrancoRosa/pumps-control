import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useContext, useEffect, useState } from 'react';
import { PumpsContext } from '../js/PumpsContext';
import RecipeConfig from './RecipeConfig';

const Config = () => {
          
  const {pumps, setPumps} = useContext(PumpsContext)
  
  const recipeInit = {
    name: 'New recipe',
    pumps: [
      { id: 0, volume: 0}, { id: 1, volume: 0}, { id: 2, volume: 0}, { id: 3, volume: 0},
    ]
  }

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

  const [recipes, setRecipes] = useState(savedRecipes)
  const [recipe, setRecipe] = useState(recipes[0])
  const [name, setName] = useState(recipes[0].name)

  const saveRecipe = () => {
    const savedNames = recipes.map(recipe => recipe.name)
    const newRecipe = {...recipe, name}
    if (savedNames.includes(name)) {
      window.alert('Please select a name not in the list')
    } else {
      setRecipes([...recipes, newRecipe])
      setRecipe(newRecipe)
    }
  }  

  const deleteRecipe = () => {
    const newRecipes = recipes.filter(recipe => recipe.name != name)
    setRecipes(newRecipes)
    setName(recipeInit.name)
    setRecipe(recipeInit)
  }  

  const updateRecipe = () => {
    const newRecipes = recipes.map(savedRecipe => {
      if(savedRecipe.name == name) {
        return {...recipe, name}
      } else {
        return savedRecipe
      }
    })
    setRecipes(newRecipes)
  }  


  const selectRecipe = (recipe) => {
    setName(recipe.name)
    setRecipe(recipe)
  }

  const newRecipe = () => {
    setName(recipeInit.name)
    setRecipe(recipeInit)
  }

  return (
    <div className="columns">
      <div className="menu column is-one-fifth">
        <p className="menu-label has-text-link">
          <a>Recipes</a>
        </p>
        <ul className="menu-list">
          {recipes.map(recipe => (
            <li>
              <a onClick={() => selectRecipe(recipe)} className={name==recipe.name ? 'is-active':''}>
                <span className={name==recipe.name ? 'has-text-white' : 'has-text-link'}>
                  <FontAwesomeIcon icon={faVial} />
                </span>
                <span className="ml-2" >{recipe.name}</span>
              </a>
            </li>
          ))}
          <li>
            <a onClick={newRecipe} className={'New recipe'==recipe.name ? 'is-active':''}>
              <span className={'New recipe'==recipe.name ? 'has-text-white' : 'has-text-link'}>
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span className="ml-2">Add recipe</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="column p-4">
        <RecipeConfig 
          recipe={recipe} setRecipe={setRecipe}
          name={name} setName={setName}
          saveRecipe={saveRecipe}
          deleteRecipe={deleteRecipe}
          updateRecipe={updateRecipe}
        />
      </div>
    </div>
  )
};

export default Config;
