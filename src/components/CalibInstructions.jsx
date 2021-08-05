import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from '../js/useLocalStorage';
import { useEffect, useState } from 'react';
import CalibModal from './CalibModal';

const CalibInstructions = () => {
  const [calibrationVol, setCalibrationVol] = useLocalStorage("calibrationVol", 8);
  const [timeoutTolerance, setTimeoutTolerance] = useLocalStorage('timeoutTolerance', '5')
  
  const [showModal, setShowModal] = useState(false);
  
  useEffect(()=> {
    const savedVolValue = window.localStorage.getItem("calibrationVol") 
    const savedTimeValue = window.localStorage.getItem("timeoutTolerance") 
    setCalibrationVol(savedVolValue.replace('"', '').replace('"', ''))
    setTimeoutTolerance(savedTimeValue.replace('"', '').replace('"', ''))
  }, [showModal])

  return (
    <div className="card m-2 pl-2 pr-2">
      <header className="card-header">
        <p className="card-header-title is-centered heading has-text-link">
          Calibration Instructions
        </p>
        <FontAwesomeIcon icon={faCog} className="m-4" onClick={() => setShowModal(true)}/>
      </header>
      <div className="card-content">
        <div className="content has-text-centered">
          <p>
            The calibration procedure measures the time and pulses required to dispense a defined quantity of liquid.
            <br />
            The current timeout tolerance is <strong>{timeoutTolerance}%</strong>
            <br />
            To accurately calculate the pulses-per-volume and timeouts, measure the time to fill <strong>{calibrationVol}</strong> Oz:
          </p>
         
        </div>
      </div>
      <CalibModal showModal={showModal} setShowModal={setShowModal}/>

    </div>
  )
}

export default CalibInstructions;