import Input from "./Input";

const RecipeConfig = ({ recipe }) => {
  
  const setPumpVolume = (e, i) => {
    console.log(e)
    console.log(i)
  }
  
  return (
    <div className="card">
      <header class="card-header">
        <p class="card-header-title">
          {recipe.name}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {recipe.pumps.map(pump => (
            <Input label={`Pump ${pump.id}`} 
              value={pump.volume} placeholder="Volume to supply"
              changed={false} 
              id={pump.id} 
              setValue={setPumpVolume}/>
          ))}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  )
}

export default RecipeConfig;