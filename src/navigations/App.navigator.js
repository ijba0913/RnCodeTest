import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Drawer from '../containers/Drawer'
import Landing from '../containers/Landing'
import Weather from '../containers/Weather'


const AppDrawerNavigator = createDrawerNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: ({ navigation }) => ({
        title: 'Landing'
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
    initialRouteName: 'Landing',
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'green'
    }
  }
)

export default createAppContainer(AppDrawerNavigator)
