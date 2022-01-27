import { useStoreActions, useStoreState } from "easy-peasy";
import { setSavedStorage } from "../../js/helpers";

const PumpsConfig = () => {
  const pumps = useStoreState((state) => state.pumps);
  const setPumps = useStoreActions((actions) => actions.setPumps);

  const handleNameChange = (id, name) => {
    setPumps(pumps.map((pump) => (pump.id === id ? { ...pump, name } : pump)));
  };

  return (
    <div className="card">
      <header className="card-header p-2">
        <h1>Set pumps's liquits</h1>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns">
            {pumps.map((pump) => (
              <div className="column">
                <p className="subtitle is-4 has-text-centered m-4">
                  Pumps {pump.id + 1}
                </p>
                <input
                  value={pump.name}
                  type="text"
                  onChange={(e) => handleNameChange(pump.id, e.target.value)}
                  className="input no-frame-input title is-3 has-text-centered"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button
          onClick={() => setSavedStorage("pumps", pumps)}
          className="button card-footer-item"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PumpsConfig;
