import { 
  faHome,
  faStopwatch,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import Tab from './Tab';

const Tabs = () => {
    return (
    <div className="tabs is-centered is-small">
      <ul>
        <Tab name="Home" icon={faHome} />
        <Tab name="Config" icon={faTools} />
        <Tab name="Calibrate" icon={faStopwatch} />
      </ul>
    </div>
  )
}

export default Tabs;
