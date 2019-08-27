import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  GRAPH_VIS,
  HOME,
  GRAPH_D3,
  GRAPH_SIGMA,
  GRAPH_VIS_FORCE,
  GRAPH_ACTUAL_DATA,
} from 'constants/routes';

import styles from './index.module.scss';


const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to={HOME} activeClassName={styles.activeLink} exact>Home</NavLink>
      <NavLink to={GRAPH_VIS} activeClassName={styles.activeLink}>Graph VIS</NavLink>
      <NavLink to={GRAPH_D3} activeClassName={styles.activeLink}>Graph D3</NavLink>
      <NavLink to={GRAPH_SIGMA} activeClassName={styles.activeLink}>Graph Sigma</NavLink>
      <NavLink to={GRAPH_VIS_FORCE} activeClassName={styles.activeLink}>Graph Force</NavLink>
      <NavLink to={GRAPH_ACTUAL_DATA} activeClassName={styles.activeLink}>Actual Data</NavLink>
    </div>
  );
};

export default Header;
