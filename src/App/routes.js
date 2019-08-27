import React from 'react';
import {
  Switch,
  Router,
  Redirect,
  Route,
} from 'react-router-dom';

import history from 'helpers/history';

import {
  HOME,
  GRAPH_VIS,
  GRAPH_D3,
  GRAPH_SIGMA,
  GRAPH_VIS_FORCE,
  GRAPH_ACTUAL_DATA,
} from 'constants/routes';

import Home from 'pages/Home';
import GraphVis from 'pages/GraphVis';
import GraphD3 from 'pages/GraphD3';
import GraphSigma from 'pages/GraphSigma';
import GraphVisForce from 'pages/GraphVisForce';
import GraphD3ActualData from 'pages/GraphD3ActualData';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={GRAPH_VIS} component={GraphVis} />
        <Route path={GRAPH_D3} component={GraphD3} />
        <Route path={GRAPH_SIGMA} component={GraphSigma} />
        <Route path={GRAPH_VIS_FORCE} component={GraphVisForce} />
        <Route path={GRAPH_ACTUAL_DATA} component={GraphD3ActualData} />
        <Route path={HOME} exact component={Home} />
        <Redirect to={GRAPH_VIS} />
      </Switch>
    </Router>
  );
};

export default Routes;
