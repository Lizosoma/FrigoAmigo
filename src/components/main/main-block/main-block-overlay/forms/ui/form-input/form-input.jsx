import React from 'react';
import styles from './form-input.module.css';

export const FormInput = ({ register, error, name, ...inputProps }) => {
  return (
    <>
      <input className={styles.input} {...register(name)} {...inputProps} />
      {error && <p className={styles.error}>{error.message}</p>}
    </>
  );
};
