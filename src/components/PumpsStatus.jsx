import { useStoreState } from "easy-peasy"
import { percent } from "../js/helpers"


const PumpsStatus = () => {
  const pumps = useStoreState(state => state.pumps)
  const pumpsState = useStoreState(state => state.pumpsState)
  return (
    <div className="columns">
      <div className="column"></div>
        <div className="column is-half">
          <div className="columns">
            {pumps.map(pump => (
              <div className="column">
                <h4 className={`heading has-text-centered ${pumpsState[pump.id].on ? 'has-text-danger': 'has-text-link'}`}>
                  {pump.name}
                </h4>
                {pumpsState[pump.id].timeout != 0 ?
                  <p className='has-text-centered'>
                    {percent(pumpsState[pump.id].pulses_count,pumpsState[pump.id].pulses)} %
                  </p> :
                  <p className='has-text-centered'>- -</p>
                }
              </div>
            ))}
          </div>
        </div>
      <div className="column"></div>
    </div>
  )
}

export default PumpsStatus