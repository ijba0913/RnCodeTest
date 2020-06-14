import { createAppContainer , createSwitchNavigator } from 'react-navigation'

import Login from '../components/Login'
import Weather from '../containers/Weather'
import Landing from '../components/Landing'

const AppNavigator = createSwitchNavigator(
  {
    Authenticate: Login,
    Weather: Weather,
    Landing: Landing,
  },
  {
    initialRouteName: 'Weather'
  }
)

export default createAppContainer(AppNavigator)
