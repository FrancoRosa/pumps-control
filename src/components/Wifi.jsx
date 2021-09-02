import { faWifi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { ping } from "../api/api"

const Wifi = () => {
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setConnected(navigator.onLine)
    }, 5*1000);
  }, [])

  return (
    <FontAwesomeIcon 
      icon={faWifi} 
      className={`wifi ${connected ? 'has-text-success' : 'has-text-grey'}`}
    />
  )
}

export default Wifi