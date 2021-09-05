import { faWifi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

const Wifi = () => {
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    window.addEventListener('online', () => setConnected(true))
    window.addEventListener('offline', () => setConnected(false))
  }, [])

  return (
    <FontAwesomeIcon 
      icon={faWifi} 
      className={`wifi ${connected ? 'has-text-success' : 'has-text-grey'}`}
    />
  )
}

export default Wifi