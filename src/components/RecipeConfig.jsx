import Input from "./Input";

const RecipeConfig = ({ 
  recipe, setRecipe,
  name, setName,
  saveRecipe, deleteRecipe, updateRecipe 
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
                <Input label={`Pump ${pump.id}`} 
                  value={pump.volume} placeholder="Volume to supply"
                  changed={false} 
                  id={pump.id} 
                  setValue={setPumpVolume}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        {recipe.name == 'New recipe'?
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