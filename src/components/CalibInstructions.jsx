const CalibInstructions = () => {
  return (
    <div class="card m-4 pl-4 pr-4">
      <header class="card-header">
        <p class="card-header-title is-centered">
          Calibration Instructions
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <p>
            The calibration procedure measures the time and pulses required to dispense a defined quantity of liquid.
            In order to accurately calculate the Pulses-per-volume and timeouts, start and stop the time to fill the following volume.
          </p>
          <p className="is-centered subtitle is-3">
            8 ounces
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default CalibInstructions;