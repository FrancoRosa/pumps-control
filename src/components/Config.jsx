import { Route, Switch } from "react-router-dom";
import ConfigNavigation from "./config/ConfigNavigation";
import PumpsConfig from "./config/PumpsConfig";
import RecipeConfig from "./config/RecipeConfig";
import ControlConfig from "./config/ControlConfig";
import WirelessConfig from "./config/WirelessConfig";
import SystemConfig from "./config/SystemConfig";
import RemoteConfig from "./config/RemoteConfig";

const Config = () => {
  return (
    <div className="columns">
      <ConfigNavigation />
      <div className="column p-4">
        <Switch>
          <Route path="/config/recipes" component={RecipeConfig} />
          <Route path="/config/pumps" component={PumpsConfig} />
          <Route path="/config/control" component={ControlConfig} />
          <Route path="/config/wireless" component={WirelessConfig} />
          <Route path="/config/system" component={SystemConfig} />
          <Route path="/config/remote" component={RemoteConfig} />
          <Route path="/config" component={RecipeConfig} />
        </Switch>
      </div>
    </div>
  );
};

export default Config;
