import React from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import HeaderComponent from '../../components/Header'


const Header = props => {
  const { navigation } = props

  console.log('headerr ----------', props)
  return (
    <HeaderComponent {...props} />
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

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(withNavigation(Header))
