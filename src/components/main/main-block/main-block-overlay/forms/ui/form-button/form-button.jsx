import React from 'react';
import styles from './form-button.module.css';

export const FormButton = ({ text, onSubmit, isLoading, disabled }) => {
  const handleClick = () => {
    if (!isLoading) {
      onSubmit();
    }
  };
  return (
    <>
      <button className={styles.button} onClick={handleClick} disabled={disabled}>
        {isLoading ? <div className={styles.loader} /> : text}
      </button>
    </>
  );
};
