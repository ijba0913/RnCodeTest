import React, { Fragment } from 'react'
import { View } from 'react-native'
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import LoginForm from '../../containers/Login/Form';
import Page from '../Page';



const App = (props) => {
  console.log(props)
  return (
    <Page title="Login">

      <Text>Login with GitHub</Text>

      <LoginForm />
    </Page>
  )
}

export default App