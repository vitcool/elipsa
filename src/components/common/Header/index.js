import React from 'react';
import { Link } from 'react-router-dom';

import { GRAPH_VIS, HOME, GRAPH_D3 } from 'constants/routes';

import styles from './index.module.scss';


const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={HOME}>Home</Link>
      <Link to={GRAPH_VIS}>Graph VIS</Link>
      <Link to={GRAPH_D3}>Graph D3</Link>
    </div>
  );
};

export default Header;
