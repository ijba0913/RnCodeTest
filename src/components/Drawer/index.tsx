import React from 'react'
import { View, Text, Content, Icon } from 'native-base'
import { DrawerItems } from 'react-navigation-drawer'


const Drawer = (props) => {
  const { logout, cred, navigation } = props
  console.log('drawer ----------', props)
  return (
    <Content>
      <Text>Code Test App</Text>

      <DrawerItems {...props} />

      <View >

        <Icon name='log-out' onPress={() => {
          logout()
          navigation.navigate('AuthNav')
        }} />
      </View>

    </Content>
  )
}

export default Drawer
