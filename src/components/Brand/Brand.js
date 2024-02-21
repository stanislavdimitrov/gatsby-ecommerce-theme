import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>STIVO TECH</h4> */}
      <svg
        width={127}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.67 23.36"
      >
        <text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="16" id="svg_1" y="41.99999" x="36.59999" stroke-width="0" stroke="#000" fill="#000000">STIVO TECH</text>
      </svg>
    </div>
  );
};

export default Brand;
