import React, { Fragment } from "react";

import Header from "components/common/Header";
import GraphComponent from 'components/Graph';

const Graph = () => {
  return (
    <Fragment>
      <Header />
      <GraphComponent />
    </Fragment>
  );
};

export default Graph;
