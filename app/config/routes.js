import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from "../components/Home"
import LoginContainer from '../containers/LoginContainer'
import MainContainer from '../containers/MainContainer'
import SummaryContainer from '../containers/SummaryContainer'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
        <Route path='login' component={LoginContainer} />
        <Route path='index' component={MainContainer} />
        <Route path='summary' component={SummaryContainer} />
    </Route>
  </Router>
);

export default routes