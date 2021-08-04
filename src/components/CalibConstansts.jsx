import { useState } from "react";
import { useLocalStorage } from "../js/useLocalStorage";

const CalibConstants = () => {
  
  const [calibrationVol, setCalibrationVol] = useLocalStorage('calibrationVol', '8')
  const [timeoutTolerance, setTimeoutTolerance] = useLocalStorage('timeoutTolerance', '5')
  
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title is-centered is-3 title">
          Set calibration constants
        </p>
      </header>
      <div className="card-content">
        <div className="content">
        <div className="field">
          <label className="label">Calibration Volume (Oz)</label>
          <div className="control">
            <input 
              className="input is-medium" type="number" 
              min={1} step={1}
              value={calibrationVol}
              onChange={e => setCalibrationVol(e.target.value)} 
              placeholder="Bucket volume to be used on calibration." />
          </div>
        </div>
        <div className="field">
          <label className="label">Timeout tolerance (%)</label>
          <div className="control">
            <input 
              className="input is-medium" type="number" 
              min={1} step={1}
              value={timeoutTolerance}
              onChange={e => setTimeoutTolerance(e.target.value)} 
              placeholder="Time tolerance before turning the pump off." />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CalibConstants;