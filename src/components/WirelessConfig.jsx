import { useStoreActions, useStoreState } from "easy-peasy"
import { updateNetwork } from "../api/api"
import { setSavedStorage } from "../js/helpers"
import KeyboardReact from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css";
import { useState } from "react/cjs/react.development";

const WirelessConfig = () => {
  
  const wifipass = useStoreState(state => state.wifipass)
  const wifissid = useStoreState(state => state.wifissid)
  const setWifipass = useStoreActions(actions => actions.setWifipass)
  const setWifissid = useStoreActions(actions => actions.setWifissid)
  const [focused, setFocused] = useState(false)
  
  const showKeyboard = () => setFocused(true)
  const hideKeyboard = () => setFocused(false)
  
  return(
    <div className="card">
      <header className="card-header p-2">
        <h1>Wireless configuration</h1>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns">
            <div className="column">
              <p className="subtitle is-4 has-text-centered m-4">SSID</p>
              <input value={wifissid} type="text"
                onChange={e => setWifissid(e.target.value)}
                className="input no-frame-input title is-3 has-text-centered" />
            </div>
            <div className="column">
              <p className="subtitle is-4 has-text-centered m-4">Password</p>
              <input value={wifipass} type="text"
                onChange={e => setWifipass(e.target.value)}
                onFocus={showKeyboard}
                onBlur={hideKeyboard}
                className="input no-frame-input title is-3 has-text-centered" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button 
          onClick={() => {
            setSavedStorage('wifissid', wifissid)
            setSavedStorage('wifipass', wifipass)
            updateNetwork(wifissid, wifipass)
          }}
          className="button card-footer-item">
            Save
        </button>
      </div>
      <div className={`has-text-grey ${!focused && 'is-hidden'}`}>
      <KeyboardReact
          layoutName="shift"
          />
      </div>
    </div>
  )
}

export default WirelessConfig