import { 
  faHome,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import Tab from './Tab';

const Tabs = () => {
    return (
    <div className="tabs is-centered is-large">
      <ul>
        <Tab name="Home" icon={faHome} />
        <Tab name="Config" icon={faTools} />
      </ul>
    </div>
  )
}

export default Tabs;
