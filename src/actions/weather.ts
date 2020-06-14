import {
  FETCH_WEATHER_LOADING,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from '../constants/weather'

export const fetchWeather = (lat, long) => dispatch => {
  console.log('---- fetchWeather action --------- ')
  console.log('lat', lat)
  console.log('long', long)
  console.log('---- ----------- --------- ')
  dispatch({ type: FETCH_WEATHER_LOADING })

  const API_KEY = '0e34194de26529ddf301ab8224e5bac8'
 
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${API_KEY}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && !data.cod) {
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data })
      } else {
        dispatch({ type: FETCH_WEATHER_ERROR, payload: "Failed to get weather forecast" })
      }
    })
}
