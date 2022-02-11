import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { faVial, faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { startControlledPump, stopPump } from "../api/api";
import logo from "../assets/logo.png";
import PumpsStatus from "./PumpsStatus";
import Notifications from "./Notifications";
import useKey from "../js/useKey";

const Home = () => {
  const pumpsState = useStoreState((state) => state.pumpsState);
  const setPumpsState = useStoreActions((actions) => actions.setPumpsState);
  const recipes = useStoreState((state) => state.recipes);
  const calibrations = useStoreState((state) => state.calibrations);
  const controlType = useStoreState((state) => state.controlType);
  const [working, setWorking] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const startRecipe = (recipe) => {
    // Update pumps time and pulses (calculating values)
    const stopPromises = [];
    pumpsState.forEach((pump) => {
      stopPromises.push(stopPump(pump));
    });
    Promise.all(stopPromises).then(() => {
      const newPumps = [...pumpsState];
      newPumps.forEach((pump, index) => {
        pump.timeout = calibrations[recipe.id].config[index].timeout;
        pump.pulses = calibrations[recipe.id].config[index].pulses;
      });
      setPumpsState(newPumps);
      const totalTime = newPumps.reduce((s, p) => s + p.timeout, 0);
      if (totalTime !== 0) {
        setSelectedRecipe(recipe.name);
        newPumps.forEach((pump) => {
          startControlledPump(pump, controlType);
        });
      }
    });
  };

  const stopRecipe = () => {
    const promises = [];
    pumpsState.forEach((pump) => {
      promises.push(stopPump(pump));
    });
    Promise.all(promises).then(() => {
      setSelectedRecipe("");
    });
  };

  useEffect(() => {
    const filling = pumpsState.map((p) => p.on).reduce((a, b) => a || b, false);
    if (working === true && filling === false) setSelectedRecipe(false);
    setWorking(filling);
  }, [pumpsState]); // eslint-disable-line

  useKey("KeyA", () => startRecipe(recipes[0]));
  useKey("KeyS", () => startRecipe(recipes[1]));
  useKey("KeyD", () => startRecipe(recipes[2]));
  useKey("KeyF", stopRecipe);

  return (
    <>
      <div className="is-flex is-flex-centered">
        <img src={logo} className="logo mb-2" alt="Decon7 logo" />
      </div>
      <div className="container ">
        <PumpsStatus />
        <Notifications />
        <div className="columns">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="column is-flex is-flex-centered">
              <div className="card is-flex-direction-column is-flex-centered home-card">
                <a onClick={() => startRecipe(recipe)} href="#top">
                  <p
                    className={`${
                      selectedRecipe === recipe.name
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
                        selectedRecipe === recipe.name
                          ? "has-text-success"
                          : "has-text-grey"
                      }`}
                      spin={selectedRecipe === recipe.name}
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
          <div className="column is-one-quarter is-flex is-flex-centered">
            <div className="card is-flex-direction-column is-flex-centered">
              <a onClick={stopRecipe} href="#top">
                <p
                  className={`${
                    working ? "has-text-danger" : "has-text-grey"
                  } title is-4 m-2 has-text-centered`}
                >
                  Stop
                </p>
                <div
                  className={`${
                    working ? "has-text-danger" : "has-text-grey"
                  } title is-1 has-text-centered m-3`}
                >
                  <FontAwesomeIcon icon={faHandPaper} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className="help is-link has-text-right">*{controlType}</p>
      </div>
    </>
  );
};

export default Home;
