import React from 'react';

import PageWrapper from 'components/common/PageWrapper';

import ReactGraphD3 from 'components/ReactGraphD3';

import styles from './index.module.scss';

const GraphD3 = () => (
  <PageWrapper>
    <h1>GraphD3</h1>
    <div className={styles.contentWrapper}>
      <ReactGraphD3 />
    </div>
  </PageWrapper>
);

export default GraphD3;
