import React from 'react';

import PageWrapper from 'components/common/PageWrapper';

import ReactGraphD3ActualData from 'components/ReactGraphD3ActualData';

import styles from './index.module.scss';

const GraphD3 = () => (
  <PageWrapper>
    <h1>Actual data</h1>
    <div className={styles.contentWrapper}>
      <ReactGraphD3ActualData />
    </div>
  </PageWrapper>
);

export default GraphD3;
