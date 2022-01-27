import { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { setSavedStorage } from "../js/helpers";
import CardManual from "./CardManual";
import CalibrateNavigation from "./CalibrateNavigation";

const Calibrate = () => {
  const pumps = useStoreState((state) => state.pumps);
  const recipes = useStoreState((state) => state.recipes);
  const calibrations = useStoreState((state) => state.calibrations);
  const setCalibrations = useStoreActions((actions) => actions.setCalibrations);

  const [selection, setSelection] = useState(recipes[0]);

  return (
    <div className="columns">
      <CalibrateNavigation selection={selection} setSelection={setSelection} />
      <div className="card column">
        <div className="columns">
          {pumps.map((pump) => (
            <CardManual
              key={pump.id}
              pump={pump}
              recipe={selection}
              calibrations={calibrations}
              setCalibrations={setCalibrations}
            />
          ))}
        </div>
        <div className="card-footer">
          <button
            onClick={() => setSavedStorage("calibrations", calibrations)}
            className="button card-footer-item"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calibrate;
