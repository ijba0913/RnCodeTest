import React from 'react'
import { View, Text, Content, Icon, Title } from 'native-base'
import { DrawerItems } from 'react-navigation-drawer'


const Drawer = (props) => {
  const { logout, cred, navigation } = props
  console.log('drawer ----------', props)
  return (
    <Content>
      <Title>Code Test App</Title>

      <DrawerItems {...props} />

      {navigation.state.key === 'AppNav' && (
        <View style={{ width: '100%', paddingHorizontal: 18 }}>
          <Icon name='log-out' onPress={() => {
            logout()
            navigation.navigate('AuthNav')
          }} />
        </View>
      )}

    </Content >
  )
}

export default Drawer
