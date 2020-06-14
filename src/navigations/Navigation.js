import { createAppContainer , createSwitchNavigator } from 'react-navigation'


import AuthNav from './Auth.navigator'
import AppNav from './App.navigator'

const Navigation = createSwitchNavigator(
  {
    AuthNav: AuthNav,
    AppNav: AppNav,
  },
  {
    initialRouteName: 'AuthNav'
  }
)

export default createAppContainer(Navigation)
