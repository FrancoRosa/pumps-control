import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from '../js/useLocalStorage';
import { useEffect, useState } from 'react';
import CalibModal from './CalibModal';

const CalibInstructions = () => {
  const [calibrationVol, setCalibrationVol] = useLocalStorage("calibrationVol", 8);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(()=> {
    const savedValue = window.localStorage.getItem("calibrationVol") 
    setCalibrationVol(savedValue.replace('"', '').replace('"', ''))
  }, [showModal])

  return (
    <div class="card m-4 pl-4 pr-4">
      <header class="card-header">
        <p class="card-header-title is-centered">
          Calibration Instructions
        </p>
        <FontAwesomeIcon icon={faCog} className="m-4" onClick={() => setShowModal(true)}/>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <p>
            The calibration procedure measures the time and pulses required to dispense a defined quantity of liquid.
            <br />
            In order to accurately calculate the Pulses-per-volume and timeouts, start and stop the time to fill the following volume.
          </p>
          <p className="is-centered subtitle is-3">
            {calibrationVol} ounces
          </p>
        </div>
      </div>
      <CalibModal showModal={showModal} setShowModal={setShowModal}/>

    </div>
  )
}

export default CalibInstructions;