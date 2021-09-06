import { useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"

const Notifications = () => {
  const {id, on, pulses, pulses_count} = useStoreState(state => state.pumpMessage)
  const pumps = useStoreState(state => state.pumps)
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    console.log('...on changed')
    if (!on) {
      if (pulses > pulses_count) {
        setNotifications(
          [...notifications, `Check ${pumps[id].name} pump`]
        )
      }
    }
  }, [on, id])

  return (
    <>
      {notifications.map((notification, index) => 
        <div className="notification is-warning" style={{top: `${-6 + index*5}em`}}>
          <button
            className="delete is-large"
            onClick={() => setNotifications(notifications.filter(t => t != notification))}/>
          <p className="pl-1 pr-1">{notification}</p>
        </div>
      )}
    </>
  )
}

export default Notifications