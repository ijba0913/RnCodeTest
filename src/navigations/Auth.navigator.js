import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Drawer from '../containers/Drawer'
import Login from '../containers/Login'
import Weather from '../containers/Weather'


const AuthDrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    Weather: {
      screen: Weather,
      navigationOptions: ({ navigation }) => ({
        title: 'Weather'
      })
    },
  },
  {
    contentComponent: Drawer,
    drawerPosition: 'left',
    drawerType: 'slide',
    useNativeAnimations: true,
    initialRouteName: 'Login',
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'blue'
    }
  }
)

export default createAppContainer(AuthDrawerNavigator)
