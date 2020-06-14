import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLocation } from '../../actions/location'
import { getUser } from '../../actions/auth'
import LandingComponent from '../../components/Landing'
import ProtectedRoute from '../ProtectedRoute'


const mapStateToProps = state => ({
  info: state.location.info,
  loading: state.location.loading,
  errLocation: state.location.error,
  // user: state.auth.success,
})

const mapDispatchToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation()),
  getUser: (user) => dispatch(getUser(user))
})

const Landing = (props) => {
  useEffect(() => {
    props.getUser(props.user)
  }, [props.user])
  return (
    <ProtectedRoute
      component={LandingComponent}
      {...props}
    />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
