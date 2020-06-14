import React from 'react'

import { Content, Button, Spinner, Text, Container } from 'native-base'

import { landingStyles } from '../../styles/landing'
import Header from '../../containers/Header'


const Page = ({
  children, title, ...rest
}) => {

  return (
    <Container>
      <Header title={title}/>
      <Content padder style={landingStyles.content}>
        {children}
      </Content>
    </Container>
  )
}

export default Page