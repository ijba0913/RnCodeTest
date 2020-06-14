import React from 'react'
import { View, Text, Content, Icon, Header, Left, Body, Right, Button, Title } from 'native-base'
import { styles } from '../../styles/header'



const HeaderComponent = ({ title, navigation }) => {
  return (
    <Header style={styles.header}>

      <Left>
        <Button transparent>
          <Icon name='menu' onPress={() => navigation.openDrawer()} />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>

      </Right>
    </Header>
  )
}

// export default Drawer
// const mapStateToProps = state => ({
//   email: state.user.email,
//   name: `${state.user.firstName} ${state.user.lastName &&
//     state.user.lastName[0]}.`,
//   accountType: state.user.accountType,
//   avatarUri: require('../../media/img/marlon.jpg')
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     signOutUser: () => dispatch(signOut()),
//     setAccountType: accountType => dispatch(setAccountType(accountType))
//   }
// }

export default HeaderComponent
