import { useStoreState } from "easy-peasy"

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
                <h4 className="heading has-text-centered has-text-link">
                  {pump.name}
                </h4>
                <p className='is-loading has-text-centered'>10%</p>
              </div>
            ))}
          </div>
        </div>
      <div className="column"></div>
    </div>
  )
}

export default PumpsStatus