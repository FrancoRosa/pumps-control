import { useStoreActions, useStoreState } from "easy-peasy";
import { setSavedStorage } from "../../js/helpers";

const ControlConfig = () => {
  const timeTolerance = useStoreState((state) => state.timeTolerance);
  const setTimeTolerance = useStoreActions(
    (actions) => actions.setTimeTolerance
  );
  const controlType = useStoreState((state) => state.controlType);
  const setControlType = useStoreActions((actions) => actions.setControlType);

  const handleSelection = (type) => {
    console.log(type);
    setControlType(type);
    setSavedStorage("controlType", type);
  };

  return (
    <div className="card">
      <header className="card-header p-2">
        <h1 className="subtitle">Control options</h1>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns is-flex is-flex-centered is-flex-direction-column">
            <h1>Select the control type</h1>
            <div className="is-flex">
              <button
                className={`button is-outlined m-4 ${
                  controlType === "pulses" ? "is-success" : "is-link"
                }`}
                onClick={() => handleSelection("pulses")}
              >
                Pulse control
              </button>
              <button
                className={`button is-outlined m-4 ${
                  controlType === "time" ? "is-success" : "is-link"
                }`}
                onClick={() => handleSelection("time")}
              >
                Time control
              </button>
              <button
                className={`button is-outlined m-4 ${
                  controlType === "mixed" ? "is-success" : "is-link"
                }`}
                onClick={() => handleSelection("mixed")}
              >
                Mixed control
              </button>
            </div>
            {controlType !== "pulses" && (
              <div className="column">
                <p className="subtitle is-4 has-text-centered m-4">
                  Timeout tolerance (%)
                </p>
                <input
                  value={timeTolerance}
                  type="number"
                  onChange={(e) => setTimeTolerance(e.target.value)}
                  className="input no-frame-input title is-3 has-text-centered"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button
          onClick={() => setSavedStorage("timeTolerance", timeTolerance)}
          className="button card-footer-item"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ControlConfig;
