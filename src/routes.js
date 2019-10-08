import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './pages/login'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login
  })
)

export default Routes