import Auth0 from 'react-native-auth0';
import { AsyncStorage } from 'react-native';
import {
  LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS,
  GET_USER_LOADING, GET_USER_ERROR, GET_USER_SUCCESS
} from '../constants/auth'


const auth0 = new Auth0({ domain: 'ijba0913.us.auth0.com', clientId: '8juKAyRIw1N1p5oUUEKTMhu83B8PGEyc' });

export const login = (values) => async dispatch => {
  console.log('login action', values)
  dispatch({ type: LOGIN_LOADING })
  let cred
  auth0
    .webAuth
    .authorize({ scope: 'openid profile email name' })
    .then(credentials => {
      AsyncStorage.setItem('accessToken', credentials.accessToken)
      dispatch({ type: LOGIN_SUCCESS, payload: credentials })
    }).catch(failure => {
      console.log('res', failure)
      dispatch({ type: LOGIN_ERROR, payload: "Failed to login" })
    })
}

export const logout = () => dispatch => {
  auth0.webAuth.clearSession().catch(error => console.log(error));
  dispatch({ type: LOGIN_ERROR, payload: 'logged out' })
  dispatch({ type: GET_USER_ERROR, payload: 'logged out' })
}

export const getUser = () => async dispatch => {
  dispatch({ type: LOGIN_LOADING })

  const token = await AsyncStorage.getItem('accessToken')
  if (token) {

    auth0.auth
      .userInfo({ token })
      .then(result => {
        dispatch({ type: GET_USER_SUCCESS, payload: result })
      })
      .catch(err => { dispatch({ type: GET_USER_ERROR, payload: "Failed to get user" }) });
  } else {
    dispatch({ type: GET_USER_ERROR, payload: "Failed to get user" })
  }
}

