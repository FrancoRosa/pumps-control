import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { capitalize } from "../../js/helpers";

const ConfigNavigation = () => {
  const options = [
    "recipes",
    "pumps",
    "control",
    "wireless",
    "remote",
    "system",
  ];
  const { mode } = useParams();
  const [selection, setSelection] = useState(mode ? mode : options[0]);

  return (
    <div className="menu column is-one-fifth">
      <p className="menu-label has-text-link">
        <p>Config</p>
      </p>
      <ul className="menu-list">
        {options.map((option) => (
          <li>
            <Link
              className={option === selection && "is-active"}
              onClick={() => setSelection(option)}
              to={`/config/${option}`}
            >
              {capitalize(option)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConfigNavigation;
