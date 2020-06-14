import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import AuthReducer from './Authentication';
import LocationReducer from './Location';
import WeatherReducer from './Weather';

const reducers = {
  form: formReducer,
  auth: AuthReducer,
  location: LocationReducer,
  weather: WeatherReducer,
}

const allReducers = combineReducers(reducers);


export default allReducers;