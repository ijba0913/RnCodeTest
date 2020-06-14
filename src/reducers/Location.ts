import {
  FETCH_LOCATION_LOADING,
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_SUCCESS,
} from '../constants/location'

const INITIAL_STATE = {
  loading: false,
  error: false,
  info: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_LOCATION_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        info: null,
      }
    case FETCH_LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        info: null,
      }
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        info: payload,
      }
    default:
      return state
  }
}
