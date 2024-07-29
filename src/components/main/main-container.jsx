import React, { forwardRef } from 'react';
import styles from './main-container.module.css';
import bg from '../../assets/pictures/main-bg.png';
import MainBlock from './main-block/main-block';

const MainContainer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.mainContainer}>
      <img className={styles.bg} alt="bg" src={bg} />
      <div className={styles.wrapper}>
        <MainBlock />
      </div>
    </div>
  );
});

export default MainContainer;
