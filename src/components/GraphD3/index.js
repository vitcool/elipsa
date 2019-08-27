import React from 'react';

import PageWrapper from 'components/common/PageWrapper';


import styles from './index.module.scss';
import ReactGraphD3 from 'components/ReactGraphD3';


const GraphD3 = () => (
  <PageWrapper>
    <h1>GraphD3</h1>
    <div className={styles.contentWrapper}>
      <ReactGraphD3 />
    </div>
  </PageWrapper>
);

export default GraphD3;
