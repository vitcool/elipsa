import React from 'react';

import PageWrapper from 'components/common/PageWrapper';

import ReactGraphVisForce from 'components/ReactGraphVisForce';

import styles from './index.module.scss';


const GraphVisForce = () => (
  <PageWrapper>
    <h1>GraphVisForce</h1>
    <div className={styles.contentWrapper}>
      <ReactGraphVisForce />
    </div>
  </PageWrapper>
);

export default GraphVisForce;
