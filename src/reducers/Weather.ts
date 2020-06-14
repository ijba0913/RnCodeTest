import {
  FETCH_WEATHER_LOADING,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from '../constants/weather'


const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null
}





export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FETCH_WEATHER_LOADING: 
      return {
        ...state,
        loading: true,
        error: false,
        data: null,
      }
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        data: null,
      }
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      }
    default:
      return state
  }
}
