import { StoreProvider, createStore, useStoreState, useStoreActions } from 'easy-peasy';
import { Switch, Redirect, Route } from 'react-router-dom';
import Tabs from './Tabs';
import Home from './Home';
import Config from './Config';
import Calibrate from './Calibrate';
import model from '../js/model'
import Wifi from './Wifi';


const store = createStore(model)

const App = () => {
  
  return (
    <StoreProvider store={store}>
      <Wifi />
      <Tabs />
        <p className="success"></p>
        <Redirect exact from="/" to="/home" />
        <div className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/config" component={Config} />
            <Route path="/calibrate" component={Calibrate} />
          </Switch>
        </div>
    </StoreProvider>
  );
}

export default App;
