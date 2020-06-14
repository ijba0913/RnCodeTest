import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withNavigation } from 'react-navigation'

import { login } from '../../actions/auth'

import LoginFormComponent from '../../components/Login/Form'


const mapStateToProps = state => ({
  user: state.auth.success
})

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(login(values)),
})

const LoginForm = (props) => {
  const { navigation, user } = props
  return (
    user
      ? navigation.navigate('AppNav')
      : <LoginFormComponent  {...props} />
  )
}

export default reduxForm({
  form: 'loginForm'
})(connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(LoginForm)))