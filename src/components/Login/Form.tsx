import React, { Fragment } from 'react'
import { View, Linking } from 'react-native'
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';



const renderInput = ({
  input, label, type, meta: { touched, error, warning }, ...rest
}) => {
  var hasError = false;
  if (error !== undefined) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <Input {...input} {...rest} secureTextEntry={type === 'password'} />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  )
}

const LoginForm = (props) => {
  const { login, handleSubmit, reset, navigation} = props
  console.log('LoginForm', props)
  return (
    <View>
      <Field
        name="email"
        component={renderInput}
        placeholder='Email'
      />
      <Field
        name="password"
        component={renderInput}
        placeholder='Password'
        type='password'
      />
      <Button onPress={handleSubmit(login)}>
        <Text>Login</Text>
      </Button>
      <Button onPress={() => Linking.openURL('https://github.com/login/oauth/authorize?client_id=82ecf88804b6dc35959b')}>
        <Text>github</Text>
      </Button>
      <Button onPress={() => navigation.navigate('AppNav')}>
        <Text>go to app</Text>
      </Button>
    </View>
  )
}

export default LoginForm