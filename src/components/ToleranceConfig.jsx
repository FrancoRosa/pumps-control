import { useStoreActions, useStoreState } from "easy-peasy";
import { setSavedStorage } from "../js/helpers";

const ToleranceConfig = () => {

  const timeTolerance = useStoreState(state => state.timeTolerance)
  const setTimeTolerance = useStoreActions(actions => actions.setTimeTolerance)
  return(
    <div className="card">
      <header className="card-header p-2">
        <h1>Set timeout tolerance in %</h1>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns">
            <div className="column">
              <p className="subtitle is-4 has-text-centered m-4">Timeout tolerance (%)</p>
              <input value={timeTolerance} type="number"
                onChange={e => setTimeTolerance(e.target.value)}
                className="input no-frame-input title is-3 has-text-centered" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button 
          onClick={() => setSavedStorage('timeTolerance',timeTolerance)}
          className="button card-footer-item">
            Save
        </button>
      </div>
    </div>
  )
}

export default ToleranceConfig;