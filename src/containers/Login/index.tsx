import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withNavigation } from 'react-navigation'

import { login, getUser } from '../../actions/auth'

import LoginComponent from '../../components/Login'


const mapStateToProps = state => ({
  user: state.auth.user.success,
  loginSuccess: state.auth.login.success
})

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  getUser: () => dispatch(getUser()),
})

const Login = (props) => {
  const { navigation, user, loginSuccess } = props
  useEffect(() => {
    getUser()
  }, [user])


  return (
    user || loginSuccess
      ? navigation.navigate('AppNav')
      : <LoginComponent  {...props} />
  )
}

// export default reduxForm({
//   form: 'loginForm'
// })(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withNavigation(LoginForm)))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Login))