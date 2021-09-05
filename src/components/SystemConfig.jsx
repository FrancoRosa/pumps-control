import { faPowerOff, faRedo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { devicePowerOff, deviceRestart, getDeviceId } from "../api/api"

const SystemConfig = () => {
  
  const [id, setId] = useState('')
  
  useEffect(() => {
    getDeviceId().then(res => setId(res.id))
  }, [])

  return(
    <div className="card">
      <header className="card-header p-2">
        <h1>Power control</h1>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns">
            <div 
              onClick={devicePowerOff}
              className="column is-flex is-flex-centered is-flex-direction-column">
              <FontAwesomeIcon icon={faPowerOff} className="is-size-1 has-text-link m-2"/>
              <p>Power Off</p>
            </div>
            <div 
              onClick={deviceRestart}
              className="column is-flex is-flex-centered is-flex-direction-column">
              <FontAwesomeIcon icon={faRedo} className="is-size-1 has-text-link mb-1"/>
              <p>Restart</p>
            </div>
          </div>
        </div>
        <footer className="card-footer is-flex-centered">
          <p className="heading has-text-link is-size-6 is-centered">
            id: {id}
          </p>
        </footer>
      </div>
    </div>
  )
}

export default SystemConfig