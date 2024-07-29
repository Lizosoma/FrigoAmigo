import React from 'react';
import styles from './premium-card-orange.module.css';
import PremiumButtonOrange from './ui/premium-button-orange';
import stars from '../../../assets/pictures/premium-stars.svg';

const PremiumCardOrange = ({ period, cost }) => {
  return (
    <div className={styles.card}>
      <img className={styles.stars} src={stars} alt="stars" />
      <p className={styles.period}>{period}</p>
      <PremiumButtonOrange cost={cost} />
    </div>
  );
};

export default PremiumCardOrange;
