import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import DevTools from '../../containers/DevTools/DevTools'
import * as reducers from '../reducers/reducer';

export function configureStore(initialState = {}) {
  let enhancerClient = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  )

  const enhancerServer = applyMiddleware(thunk);

  let store

  if (true) {
    store = createStore(combineReducers(reducers), initialState, enhancerClient)
  } else {
    store = createStore(combineReducers(reducers), initialState, enhancerServer)
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducer', () => {
      const nextReducer = require('../reducers/reducer').default;
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
