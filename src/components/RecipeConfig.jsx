import { useLocalStorage } from "../js/useLocalStorage";
import InputVolume from "./InputVolume";

const RecipeConfig = ({ 
  recipe, setRecipe,
  name, setName,
  saveRecipe, deleteRecipe, updateRecipe,
  calibrations 
}) => {
  
 
  const setPumpVolume = (e, id) => {
    const newVolume = { ...recipe }
    newVolume.pumps[id].volume = e
    setRecipe(newVolume)
  }
  
  return (
    <div className="card">
      <header className="card-header p-2">
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)}
          className="input no-frame-input title"
        />
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns">
            {recipe.pumps.map(pump => (
              <div className="column">
                <InputVolume label={`Pump ${pump.id}`} 
                  value={pump.volume} placeholder="Volume to supply"
                  changed={false} 
                  id={pump.id} 
                  setValue={setPumpVolume}/>
                <div className="card-footer is-justify-content-space-around">
                  <div className="has-text-centered m-2">
                    <p className="heading has-text-link">Pulses</p>
                    <p>{calibrations[pump.id].pulses_per_volume*recipe.pumps[pump.id].volume}</p>
                  </div>
                  <div className="has-text-centered m-2">
                    <p className="heading has-text-link">Timeout</p>
                    <p>{calibrations[pump.id].timeout*recipe.pumps[pump.id].volume}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        {recipe.name === 'New recipe'?
          <a className="card-footer-item" onClick={saveRecipe}>Save</a>
         :
          <>
          <a className="card-footer-item" onClick={updateRecipe}>Update</a>
          <a className="card-footer-item" onClick={deleteRecipe}>Delete</a>
          </>
        }
      </footer>
    </div>
  )
}

export default RecipeConfig;