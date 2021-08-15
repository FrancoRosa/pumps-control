import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../js/useLocalStorage';
import ConfigNavigation from './ConfigNavigation';
import RecipeConfig from './RecipeConfig';

const Config = () => {
  
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

  const calibrationsInit = [
    { id: 0, pulses_per_volume: 6, timeout: 8 },
    { id: 1, pulses_per_volume: 6, timeout: 8 },
    { id: 2, pulses_per_volume: 7, timeout: 8 },
    { id: 3, pulses_per_volume: 7, timeout: 8 },
  ]

  const [recipes, setRecipes] = useLocalStorage('recipes', savedRecipes)
  const [recipe, setRecipe] = useState(recipes[0])
  const [name, setName] = useState(recipes[0].name)
  const [calibrations, setCalibrations] = useLocalStorage('calibrations', calibrationsInit)

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
      if(savedRecipe.name === name) {
        return {...recipe, name}
      } else {
        return savedRecipe
      }
    })
    setRecipes(newRecipes)
  }  

  return (
    <div className="columns">
      <ConfigNavigation/>
      <div className="column p-4">
        <RecipeConfig 
          recipe={recipe} setRecipe={setRecipe}
          name={name} setName={setName}
          saveRecipe={saveRecipe}
          deleteRecipe={deleteRecipe}
          updateRecipe={updateRecipe}
          calibrations={calibrations}
        />
      </div>
    </div>
  )
  
};

export default Config;
