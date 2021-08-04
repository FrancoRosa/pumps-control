const RecipeConfig = ({ recipe }) => {
  return (
    <div className="card">
      <header class="card-header">
        <p class="card-header-title">
          {recipe.name}
        </p>
      </header>
      
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  )
}

export default RecipeConfig;