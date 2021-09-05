import { useStoreActions, useStoreState } from "easy-peasy"
import { setSavedStorage } from "../js/helpers"

const RemoteConfig = () => {
  const server = useStoreState(state => state.server)
  const setServer = useStoreActions(actions => actions.setServer)

  return (
    <div className="card">
      <header className="card-header p-2">
        <h1>Set server to send reports to</h1>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns">
            <div className="column">
              <input value={server} type="text"
                onChange={e => setServer(e.target.value)}
                placeholder="http://mymightyserver.com"
                className="input no-frame-input title is-3 has-text-centered" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button 
          onClick={() => setSavedStorage('server', server)}
          className="button card-footer-item">
            Save
        </button>
      </div>
    </div>
  )
}

export default RemoteConfig