import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/graph">Graph</Link>
    </div>
  );
};

export default Header;
