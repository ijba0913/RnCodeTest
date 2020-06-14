import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Content } from 'native-base'

import {logout} from '../../actions/auth'

import DrawerComponent from '../../components/Drawer'


const mapStateToProps = state => ({
  cred: state.auth.success
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

const Drawer = props => {
  return (
    <DrawerComponent {...props}/>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer)
