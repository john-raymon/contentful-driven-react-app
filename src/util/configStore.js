import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import reducers from './../state/reducers'
import { combineReducers } from 'redux'

import {
  routerReducer,
  routerMiddleware,
} from "react-router-redux";

const configureStore = (persistedState, history) => { 
  const middlewares = [thunkMiddleware, createLogger(), promiseMiddleware(), routerMiddleware(history)]
	return createStore(
    combineReducers({
      ...reducers,
      persistedState, 
      router: routerReducer }), 
    applyMiddleware(...middlewares))
}
export default configureStore
/* 
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/index'

const middlewares = [thunkMiddleware, createLogger(), promiseMiddleware()]
const configureStore = (persistedState) => {
	return createStore(rootReducer,persistedState, applyMiddleware(...middlewares))
}
export default configureStore;
*/