import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
import { capitalize } from "../js/helpers";

const CalibrateNavigation = ({ selection, setSelection }) => {
  const recipes = useStoreState((state) => state.recipes);

  return (
    <div className="menu column is-one-fifth">
      <p className="menu-label has-text-link">
        <p>Recipes</p>
      </p>
      <ul className="menu-list">
        {recipes.map((recipe) => (
          <li>
            <Link
              className={recipe === selection && "is-active"}
              onClick={() => setSelection(recipe)}
            >
              {capitalize(recipe.name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalibrateNavigation;
