import React, { useEffect } from 'react'

import { View } from 'react-native'
import { Content, Button, Spinner, Text, Container } from 'native-base'

import { landingStyles } from '../../styles/landing'
import Header from '../../containers/Header'
import Page from '../Page'



const Landing = ({
  loading, fetchLocation, info, user
}) => {

  return (
    <Page title="Landing">
      <Text style={landingStyles.name}>
        {user.name}
      </Text>


      <Button primary style={landingStyles.button} onPress={() => fetchLocation()}>
        {loading
          ? <Spinner />
          : <Text style={landingStyles.buttonText}>Get Location</Text>
        }
      </Button>
      {info &&
        <View style={landingStyles.location}>

          <Text>Latitude: {info.coords.latitude}</Text>
          <Text>Longitude: {info.coords.longitude}</Text>

        </View>}

    </Page>
  )
}

export default Landing