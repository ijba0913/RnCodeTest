import React, { useEffect } from 'react'
import { Linking } from 'react-native'
import { Content, Text, View, Button } from 'native-base'

import Page from '../Page';
import Card from './Card'

const Weather = ({
  fetchLocation, info, fetchWeather, weather, isLargeScreen
}) => {
  return (
    <Page title="Weather">

      {/* {weather && <Card {...weather.current} />} */}
      {weather && weather.daily.map(day => (
        <Card {...day} isLargeScreen={isLargeScreen}/>
      ))}

    </Page>
  )
}

export default Weather