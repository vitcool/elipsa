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
import { HOME, GRAPH_VIS } from 'constants/routes';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={HOME} exact component={Home} />
        <Route path={GRAPH_VIS} component={Graph} />
        <Redirect to={GRAPH_VIS} />
      </Switch>
    </Router>
  );
};

export default Routes;
