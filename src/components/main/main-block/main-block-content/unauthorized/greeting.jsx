import React from 'react';
import styles from './greeting.module.css';

const Greeting = () => {
  return (
    <>
      <p className={styles.privet}>Привет</p>
      <p className={styles.newld}>Я FrigoAmigo - новый лучший друг твоего холодильника</p>
      <p className={styles.privetInfo}>
        Следить за состоянием продуктов теперь легче. Открывай свой холодильник, сканируй продукты,
        разделяй их по категориям и отслеживай срок годности{' '}
      </p>
      <p className={styles.stayFrash}>Stay fresh</p>
    </>
  );
};

export default Greeting;
