import React from 'react';
import styles from './create-fridge-mobile.module.css';
import createFridge from '../../../assets/pictures/main-createfridge.svg';

const CreateFridgeMobile = ({ onClick }) => {
  return (
    <img className={styles.createFridge} src={createFridge} alt="createFridge" onClick={onClick} />
  );
};

export default CreateFridgeMobile;
