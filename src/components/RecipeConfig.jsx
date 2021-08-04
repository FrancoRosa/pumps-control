import Input from "./Input";

const RecipeConfig = ({ recipe, setRecipe, name, setName }) => {
  
  const setPumpVolume = (e, id) => {
    const newVolume = {...recipe}
    newVolume.pumps[id].volume = e
    setRecipe(newVolume)
  }
  
  return (
    <div className="card">
      <header class="card-header p-2">
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)}
          className="input no-frame-input title"
        />
      </header>
      <div class="card-content">
        <div class="content">
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
      <footer class="card-footer">
        <a class="card-footer-item">Save</a>
        <a class="card-footer-item">Delete</a>
      </footer>
    </div>
  )
}

export default RecipeConfig;