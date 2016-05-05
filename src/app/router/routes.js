import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App/App';
import Home from '../components/home/home'
const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
