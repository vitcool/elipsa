import React from 'react';

import PageWrapper from 'components/common/PageWrapper';

import ReactGraphVis from 'components/ReactGraphVis';

import styles from './index.module.scss';


const GraphVis = () => (
  <PageWrapper>
    <h1>GraphVis</h1>
    <div className={styles.contentWrapper}>
      <ReactGraphVis />
    </div>
  </PageWrapper>
);

export default GraphVis;
