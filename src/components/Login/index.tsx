import React, { Fragment } from 'react'
import { View } from 'react-native'
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import LoginForm from '../../containers/Login';
import Page from '../Page';


const App = (props) => {
  const {
    login,
    // handleSubmit, reset,
    navigation
  } = props

  return (
    <Page title="">
      <Button onPress={() => login()} dark style={{ justifyContent: 'center'}}>
        <Text>Login with Github</Text>
      </Button>
      {/* <Button onPress={() => navigation.navigate('AppNav')}>
        <Text>go to app</Text>
      </Button> */}
    </Page>
  )
}

export default App