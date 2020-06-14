import Geolocation from '@react-native-community/geolocation';

import {
  FETCH_LOCATION_LOADING,
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_SUCCESS,
} from '../constants/location'

export const fetchLocation = () => dispatch => {
  dispatch({ type: FETCH_LOCATION_LOADING })

  Geolocation.getCurrentPosition(info => {
    console.log('info', info)
    if (info)
      dispatch({ type: FETCH_LOCATION_SUCCESS, payload: info })
    else
      dispatch({ type: FETCH_LOCATION_ERROR, payload: 'Failed to Get Location' })
  });
}
