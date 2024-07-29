import React from 'react';
import styles from './white-button.module.css';

const WhiteButton = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default WhiteButton;
