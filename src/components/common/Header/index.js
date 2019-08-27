import React from 'react';
import { Link } from 'react-router-dom';

import {
  GRAPH_VIS,
  HOME,
  GRAPH_D3,
  GRAPH_SIGMA,
  GRAPH_VIS_FORCE,
} from 'constants/routes';

import styles from './index.module.scss';


const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={HOME}>Home</Link>
      <Link to={GRAPH_VIS}>Graph VIS</Link>
      <Link to={GRAPH_D3}>Graph D3</Link>
      <Link to={GRAPH_SIGMA}>Graph Sigma</Link>
      <Link to={GRAPH_VIS_FORCE}>Graph Force</Link>
    </div>
  );
};

export default Header;
