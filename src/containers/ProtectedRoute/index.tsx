import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import { getUser } from '../../actions/auth'
import WeatherComponent from '../../components/Weather'
import { Content } from 'native-base'


const mapStateToProps = state => ({
  user: state.auth.user.success,
})

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
})

const ProtectedRoute = (props) => {
  const {
    component: Component,
    user,
    navigation,
    getUser
  } = props

  useEffect(() => {
    getUser()
  }, [])

  return (
    user
      ? <Component  {...props} />
      : navigation.navigate('AuthNav')
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)
