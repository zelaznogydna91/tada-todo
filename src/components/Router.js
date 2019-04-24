import React from 'react'
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom'

import App from './App'
import NotFound from './NotFound'

// -----------END--OF--IMPORTS------------------

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={'/tada-todo'} component={App} />
      <Redirect from={'/'} to={'/tada-todo'} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
