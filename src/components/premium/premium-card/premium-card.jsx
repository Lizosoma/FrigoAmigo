import React from 'react';
import styles from './premium-card.module.css';
import PremiumButton from './ui/premium-button';

const PremiumCard = ({ period, price, cost }) => {
  return (
    <div className={styles.card}>
      <p className={styles.period}>{period}</p>
      <p className={styles.price}>{price}</p>
      <PremiumButton cost={cost} />
    </div>
  );
};

export default PremiumCard;
