import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/login";
import Register from "./pages/register";
import Reset from "./pages/reset";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    Reset
  })
);

export default Routes;
