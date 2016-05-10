import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App/App'
import MainDashboard from '../containers/Dashboard/Dashboard'
import Home from '../components/home/home'
import Login from '../components/auth/login'
import Signup from '../components/auth/signup'
import NotFound from '../components/notFound/notFound.js'
const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/login" component={ Login }/>
    <Route path="/signup" component={ Signup }/>
    <Route path="/dashboard" component={ MainDashboard }/>
    <Route path="*" component={ NotFound }/>
  </Route>
);

export default routes;
