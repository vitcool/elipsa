import React, { Fragment } from "react";

import Header from "components/common/Header";

import HomeComponent from "components/Home";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HomeComponent />
    </Fragment>
  );
};

export default Home;
