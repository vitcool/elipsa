import React from 'react';
import { Link } from 'react-router-dom';

import { GRAPH_VIS } from 'constants/routes';

import styles from './index.module.scss';


const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Home</Link>
      <Link to={GRAPH_VIS}>Graph VIS</Link>
    </div>
  );
};

export default Header;
