import { faPowerOff, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  devicePowerOff,
  deviceRestart,
  getDeviceId,
  getLastCommit,
} from "../api/api";

const SystemConfig = () => {
  const [id, setId] = useState("");
  const [commit, setCommit] = useState("28d9569");

  useEffect(() => {
    getDeviceId().then((res) => setId(res.id));
    getLastCommit().then((res) => setCommit(res.commit));
  }, []);

  return (
    <div className="card">
      <header className="card-header p-2">
        <h1>Power control</h1>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns">
            <div
              onClick={devicePowerOff}
              className="pointer column is-flex is-flex-centered is-flex-direction-column"
            >
              <FontAwesomeIcon
                icon={faPowerOff}
                className="is-size-1 has-text-link m-2"
              />
              <p>Power Off</p>
            </div>
            <div
              onClick={deviceRestart}
              className="pointer column is-flex is-flex-centered is-flex-direction-column"
            >
              <FontAwesomeIcon
                icon={faRedo}
                className="is-size-1 has-text-link mb-1"
              />
              <p>Restart</p>
            </div>
          </div>
        </div>
        <footer className="card-footer is-flex-centered">
          <p className="heading has-text-link is-size-6 is-centered">
            id: {id}
          </p>
        </footer>
        <p className="help has-text-right has-text-grey">{commit}</p>
      </div>
    </div>
  );
};

export default SystemConfig;
