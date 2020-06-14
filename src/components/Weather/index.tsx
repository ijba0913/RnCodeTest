import React, { useEffect } from 'react'
import { Linking } from 'react-native'
import { Content, Text, View, Button } from 'native-base'

import Page from '../Page';
import Card from './Card'

interface Props {
  weather: {
    daily: Array<object>,
  },
  isLargeScreen: boolean,
}

// type weather {
//   daily: [Array],

// }

const Weather: React.FC<Props> = (props) => {
  //   weather, isLargeScreen
  // }) => {
  const { weather, isLargeScreen } = props

  return(
    <Page title = "Weather" >

      {/* {weather && <Card {...weather.current} />} */ }
      { weather && weather.daily.map((day, key) => (
        <Card {...day} isLargeScreen={isLargeScreen} key={key} />
      ))}

    </Page >
  )
}

export default Weather