import React from 'react';

import PageWrapper from 'components/common/PageWrapper';

import ReactGraphSigma from 'components/ReactGraphSigma';

import styles from './index.module.scss';


const GraphSigma = () => (
  <PageWrapper>
    <h1>GraphSigma</h1>
    <div className={styles.contentWrapper}>
      <ReactGraphSigma />
    </div>
  </PageWrapper>
);

export default GraphSigma;
