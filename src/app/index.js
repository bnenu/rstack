import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import '../assets/styles/app.scss'

import history from './router/history'
import routes from './router/routes'
import { configureStore } from './redux/store/store'
import DevTools from './containers/DevTools/DevTools'

const store = configureStore()// use window.__INITIAL_STATE__ as param for isomorfic apps
let toRender
//console.log('env is ', process.env.CLIENT)
if (process.env.NODE_ENV === 'production') {
  toRender = (<Provider store={store}>
                <Router history={history} routes={routes} />
              </Provider>)
} else {
  if (!window.devToolsExtension) {
    toRender = (<Provider store={store}>
                  <div>
                    <Router history={history} routes={routes} />
                    <DevTools />
                  </div>
                </Provider>)
  } else {
    toRender = (<Provider store={store}>
                  <Router history={history} routes={routes} />
                </Provider>)
  }
}


render(toRender, document.getElementById('app'))
