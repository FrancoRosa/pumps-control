import { useStoreActions, useStoreState } from "easy-peasy";
import { startControlledPump, stopPump } from "../api/api";
import { useLocalStorage } from "../js/useLocalStorage";
import { faVial, faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import PumpsStatus from "./PumpsStatus";
import { useEffect, useState } from "react";
import Notifications from "./Notifications";
import useKey from "../js/useKey";

const Home = () => {
  const pumpsState = useStoreState((state) => state.pumpsState);
  const setPumpsState = useStoreActions((actions) => actions.setPumpsState);
  const recipes = useStoreState((state) => state.recipes);
  const calibrations = useStoreState((state) => state.calibrations);
  const [working, setWorking] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const startRecipe = (recipe) => {
    // Update pumps time and pulses (calculating values)
    const newPumps = [...pumpsState];
    newPumps.forEach((pump, index) => {
      pump.timeout = calibrations[recipe.id].config[index].timeout;
      pump.pulses = calibrations[recipe.id].config[index].pulses;
    });
    setPumpsState(newPumps);
    const totalTime = newPumps.reduce((s, p) => s + p.timeout, 0);
    console.log("totaltime:", totalTime);
    if (totalTime != 0) {
      setSelectedRecipe(recipe.name);
      newPumps.forEach((pump) => {
        startControlledPump(pump);
      });
    }
  };

  const stopRecipe = () => {
    pumpsState.forEach((pump) => {
      stopPump(pump);
    });
  };

  useEffect(() => {
    const filling = pumpsState.map((p) => p.on).reduce((a, b) => a || b, false);
    if (working == true && filling == false) setSelectedRecipe(false);
    setWorking(filling);
  }, [pumpsState]);

  useKey("KeyA", () => startRecipe(recipes[0]));
  useKey("KeyS", () => startRecipe(recipes[1]));
  useKey("KeyD", () => startRecipe(recipes[2]));
  useKey("KeyF", stopRecipe);

  return (
    <>
      <div className="is-flex is-flex-centered">
        <img src={logo} className="logo mb-2" />
      </div>
      <div className="container ">
        <PumpsStatus />
        <Notifications />
        <div className="columns">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="column is-flex is-flex-centered">
              <div className="card is-flex-direction-column is-flex-centered home-card">
                <a onClick={() => startRecipe(recipe)}>
                  <p
                    className={`${
                      selectedRecipe == recipe.name
                        ? "has-text-success"
                        : "has-text-grey"
                    } title is-4 m-2 has-text-centered`}
                  >
                    {recipe.name}
                  </p>
                  <div className="title is-1 has-text-centered m-2 has-text-success">
                    <FontAwesomeIcon
                      icon={faVial}
                      className={`${
                        selectedRecipe == recipe.name
                          ? "has-text-success"
                          : "has-text-grey"
                      }`}
                      spin={selectedRecipe == recipe.name}
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
          <div className="column is-one-quarter is-flex is-flex-centered">
            <div className="card is-flex-direction-column is-flex-centered">
              <a onClick={stopRecipe}>
                <p
                  className={`${
                    working ? "has-text-danger" : "has-text-grey"
                  } title is-4 m-4 has-text-centered`}
                >
                  Stop
                </p>
                <div
                  className={`${
                    working ? "has-text-danger" : "has-text-grey"
                  } title is-1 has-text-centered m-4`}
                >
                  <FontAwesomeIcon icon={faHandPaper} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
