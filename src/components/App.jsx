import { Switch, Redirect, Route } from 'react-router-dom';
import Tabs from './Tabs';
import Home from './Home';
import Config from './Config';

const App = () => {
  return (
    <div>
      <Tabs />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <div className="container">
          <Route path="/home" component={Home} />
          <Route path="/config" component={Config} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
