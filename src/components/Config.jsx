import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { useLocalStorage } from '../js/useLocalStorage';
import ConfigNavigation from './ConfigNavigation';
import PumpsConfig from './PumpsConfig';
import RecipeConfig from './RecipeConfig';
import ToleranceConfig from './ToleranceConfig';
import WirelessConfig from './WirelessConfig';
import SystemConfig from './SystemConfig';
import RemoteConfig from './RemoteConfig';

const Config = () => {
  return (
    <div className="columns">
      <ConfigNavigation/>
      <div className="column p-4">
        <Switch>
          <Route path="/config/recipes" component={RecipeConfig} />
          <Route path="/config/pumps" component={PumpsConfig} />
          <Route path="/config/tolerance" component={ToleranceConfig} />
          <Route path="/config/wireless" component={WirelessConfig} />
          <Route path="/config/system" component={SystemConfig} />
          <Route path="/config/remote" component={RemoteConfig} />
          <Route path="/config" component={RecipeConfig} />
        </Switch>
      </div>
    </div>
  )
  
};

export default Config;
