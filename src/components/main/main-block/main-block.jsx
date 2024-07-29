import React, { useContext } from 'react';
import styles from './main-block.module.css';
import MainBlockContent from './main-block-content/main-block-content';
import MainBlockOverlay from './main-block-overlay/main-block-overlay';
import { UserContext } from '../../../services/user-context';

const MainBlock = () => {
  const { authenticated } = useContext(UserContext);

  return (
    <div className={`${styles.mainBlock} ${authenticated ? styles.authenticated : ''}`}>
      <div className={styles.content}>
        <MainBlockContent />
      </div>
      <div className={styles.overlay}>
        <MainBlockOverlay />
      </div>
    </div>
  );
};

export default MainBlock;
