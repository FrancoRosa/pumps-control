import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

const Notifications = () => {
  const { id, on, pulses, pulses_count, timeout, time_count } = useStoreState(
    (state) => state.pumpMessage
  );
  const pumps = useStoreState((state) => state.pumps);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    console.log("...on changed");
    if (!on) {
      if (time_count > timeout) {
        console.log("timeout:", timeout, "time_count:", time_count);
        setNotifications([...notifications, `Check ${pumps[id].name} pump`]);
      }
    }
  }, [on, id]);

  return (
    <>
      {notifications.slice(0, 3).map((notification, index) => (
        <div
          className="notification is-warning mr-4"
          style={{ top: `${-7 + index * 5}em` }}
        >
          <button
            className="delete is-large"
            onClick={() =>
              setNotifications(notifications.filter((t) => t != notification))
            }
          />
          <p className="pl-1 pr-1">{notification}</p>
        </div>
      ))}
    </>
  );
};

export default Notifications;
