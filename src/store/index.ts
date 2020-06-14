import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import allReducers from '../reducers'


export const store = createStore(
  allReducers, 
  applyMiddleware(thunk, logger)
)
