import React from 'react';
import {
    Switch,
    Router,
    Redirect,
    Route,
  } from 'react-router-dom';

import Home from 'pages/Home';
import Graph from 'pages/Graph';

import history from 'helpers/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/graph" component={Graph} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
