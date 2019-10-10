import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/login";
import Register from "./pages/register";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Register
    },
    { initialRouteName: "Register" }
  )
);

export default Routes;
