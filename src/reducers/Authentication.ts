import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  GET_USER_LOADING,
  GET_USER_ERROR,
  GET_USER_SUCCESS
} from '../constants/auth'

const variables = {
  loading: false,
  error: false,
  result: false,
}

const INITIAL_STATE = {
  login: variables,
  user: variables,
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        login: {
          loading: true,
          error: false,
          success: false
        }
      }

    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          loading: false,
          error: payload,
          success: false,
        }
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          loading: false,
          error: false,
          success: payload,
        }
      }
    case GET_USER_LOADING:
      return {
        ...state,
        user: {
          loading: true,
          error: false,
          success: false,
        }
      }
    case GET_USER_ERROR:
      return {
        ...state,
        user: {
          loading: false,
          error: payload,
          success: false,
        }
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          loading: false,
          error: false,
          success: payload,
        }
      }
    default:
      return state
  }
}
