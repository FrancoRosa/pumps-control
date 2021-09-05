import { useStoreActions, useStoreState } from "easy-peasy"
import { deviceNetCard, deviceNetScan, updateNetwork } from "../api/api"
import { setSavedStorage } from "../js/helpers"
import KeyboardReact from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

const WirelessConfig = () => {
  
  const wifipass = useStoreState(state => state.wifipass)
  const wifissid = useStoreState(state => state.wifissid)
  const setWifipass = useStoreActions(actions => actions.setWifipass)
  const setWifissid = useStoreActions(actions => actions.setWifissid)
  const [focused, setFocused] = useState(false)
  const [networks, setNetworks] = useState([])
  const [networkCard, setNetworkCard] = useState(null)
  const showKeyboard = () => setFocused(true)
  const hideKeyboard = () => setFocused(false)
  
  useEffect(() => {
    deviceNetScan().then(res => setNetworks(res.networks))
    deviceNetCard().then(res => setNetworkCard(res.card))
  }, [])

  
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
                className="input no-frame-input title is-3 has-text-centered" />
            </div>
          </div>
          
        </div>
      </div>
      <div className="card-footer is-flex-direction-column">
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
      <div className="is-flex is-flex-direction-column is-flex-centered m-4">
        <p className="heading has-text-centered has-text-link">Available Networks ({networkCard})</p>
          <table class="table is-bordered is-striped is-narrow">
          <thead>
            <tr>
              <th className="has-text-centered is-size-6">SSID</th>
              <th className="has-text-centered is-size-6">SNR</th>
            </tr>
          </thead>
          <tbody>
            {networks.map(network => (
                <tr>
                  <td className="has-text-centered is-size-6"> {network.ssid} </td>
                  <td className="has-text-centered is-size-6"> {network.snr} </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`has-text-grey ${!focused && 'is-hidden'}`}>
      </div>
    </div>
  )
}

export default WirelessConfig