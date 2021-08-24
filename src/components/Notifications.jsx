import { useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"

const Notifications = () => {
  const {id, on, pulses, pulses_count} = useStoreState(state => state.pumpMessage)
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    console.log('...on changed')
    if (!on) {
      if (pulses > pulses_count) {
        setNotifications(
          [...notifications, `Maintenace/calibration required on ${id}`]
        )
      }
    }
  }, [on, id])

  return (
    <>
      {notifications.map((notification, index) => 
        <div class="notification is-warning" style={{top: `${-6 + index*5}em`}}>
          <button
            class="delete is-large"
            onClick={() => setNotifications(notifications.filter(t => t != notification))}/>
          <p className="pl-4 pr-4">{notification}</p>
        </div>
      )}
    </>
  )
}

export default Notifications