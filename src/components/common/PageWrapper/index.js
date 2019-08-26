import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const PageWrapper = ({ children }) => (
  <div className={styles.pageWrapper}>{children}</div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
