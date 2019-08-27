import React from 'react';
import {
  Switch,
  Router,
  Redirect,
  Route,
} from 'react-router-dom';

import Home from 'pages/Home';
import GraphVis from 'pages/GraphVis';
import GraphD3 from 'pages/GraphD3';
import GraphSigma from 'pages/GraphSigma';

import history from 'helpers/history';

import {
  HOME,
  GRAPH_VIS,
  GRAPH_D3,
  GRAPH_SIGMA,
} from 'constants/routes';


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={HOME} exact component={Home} />
        <Route path={GRAPH_VIS} component={GraphVis} />
        <Route path={GRAPH_D3} component={GraphD3} />
        <Route path={GRAPH_SIGMA} component={GraphSigma} />
        <Redirect to={GRAPH_VIS} />
      </Switch>
    </Router>
  );
};

export default Routes;
