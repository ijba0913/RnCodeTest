import React from 'react'
import { Linking, Image, Dimensions } from 'react-native'
import { Content, Text, View, Button, Container } from 'native-base'
import { styles as defStyle, stylesLarge } from '../../styles/weather'


const Card = ({
  dt, temp: kelvin, humidity,
  pressure, weather, isLargeScreen,
}) => {

  const date = new Date(dt * 1000)

  let celsius = kelvin - 273;
  if (kelvin.max) celsius = kelvin.max - 273;
  const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
  const { main, description, icon } = weather[0]
  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`

  console.log('isLargeScreen', isLargeScreen)
  // const styles = isLargeScreen ? stylesLarge : defStyle
  let styles = isLargeScreen ? stylesLarge : defStyle
  return (
    <Container style={styles.card}>

      {/* <View style={styles.main} > */}
      <View>
        <Image source={{ uri: iconUrl }} style={styles.icon} />
        <Text style={styles.weather}>{main}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.date}>
        {date.toDateString()}
      </Text>
      <View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={styles.pressure}>Temperature: </Text> 
          <Text style={styles.temp}>
            {fahrenheit} F
          </Text>
        </View>
        <Text style={styles.pressure}>Pressure: {pressure}</Text>
        <Text style={styles.humidity}>Humidity: {humidity}</Text>
      </View>
      {/* </View> */}


    </Container>


    //   {/* //     <Text>
    // //       - Use the user's latitude and longitude to fetch the weather forecast from [openweathermap.org](https://openweathermap.org/forecast16#geo16)
    // //       - Display the following grid of information for small screens:
    // //       |Date (mm/dd/yyyy) | Temperature (F) | |------------------|-----------------| |03/01/2020 | 75 |
    // //       - Display the following grid of information for large screens:
    // //       |Date (mm/dd/yyyy) | Temperature (F) | Description | Main | Pressure | Humidity |------------------|-----------------|-------------|------|----------|---------
    // //       |03/01/2020 | 75 | 'Sky is clear' | 'Clear' |1023.68|100
    // //     </Text> */}



    // {/* </Content> */}
  )
}

export default Card