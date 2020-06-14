import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Dimensions } from 'react-native'

import { fetchWeather } from '../../actions/weather'
import { fetchLocation } from '../../actions/location'

import WeatherComponent from '../../components/Weather'


const mapStateToProps = state => ({
  info: state.location.info,
  loading: state.location.loading,
  errLocation: state.location.error,
  weather: state.weather.data
})

const mapDispatchToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation()),
  fetchWeather: (lat, long) => dispatch(fetchWeather(lat, long)),
})

const Weather = props => {
  const { info, fetchLocation, fetchWeather } = props

  useEffect(() => {
    if (!info) {
      fetchLocation()
    } else {
      fetchWeather(info.coords.latitude, info.coords.longitude)
    }
  }, [info])

  const [isLargeScreen, setIsLargeScreen] = useState(Dimensions.get('window').width > 800)

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setIsLargeScreen(Dimensions.get('window').width > 800)
    })
  }, [])

  return (
    <WeatherComponent {...props} isLargeScreen={isLargeScreen} />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)
