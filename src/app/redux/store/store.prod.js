import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from '../reducers/reducer'

export function configureStore(initialState = {}) {
  const enhancer = applyMiddleware(thunk);

  return createStore(combineReducers(reducers), initialState, enhancer);
}