import { useStoreActions, useStoreState } from "easy-peasy";
import { setSavedStorage } from "../js/helpers";

const RecipeConfig = () => {
  const recipes = useStoreState((state) => state.recipes);
  const setRecipes = useStoreActions((actions) => actions.setRecipes);

  const handleNameChange = (id, name) => {
    console.log("bip");
    setRecipes(
      recipes.map((recipe) => (recipe.id == id ? { ...recipe, name } : recipe))
    );
  };

  return (
    <div className="card">
      <header className="card-header p-2">
        <h1>Set recipes's friendly names</h1>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns">
            {recipes.map((recipe) => (
              <div className="column">
                <p className="subtitle is-4 has-text-centered m-4">
                  Recipe {recipe.id + 1}
                </p>
                <input
                  value={recipe.name}
                  type="text"
                  onChange={(e) => handleNameChange(recipe.id, e.target.value)}
                  className="input no-frame-input title is-3 has-text-centered"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button
          onClick={() => setSavedStorage("recipes", recipes)}
          className="button card-footer-item"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RecipeConfig;
