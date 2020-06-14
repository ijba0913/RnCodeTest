import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withNavigation, createAppContainer } from 'react-navigation'

// import AppNavigation from '../navigations/App.navigator.old'
import Navigation from '../../navigations/Navigation'


const mapStateToProps = state => ({
  isAuthenticated: true,
  // navigation: state.navigation,
  // state
})

const mapDispatchToProps = dispatch => ({

})

const App = (props) => {
  console.log('nv props', props)
  // return (<AppComponent />)
  return (
    // <AppComponent />
    <Fragment>

      <Navigation />
    </Fragment>

  )
}


export default App