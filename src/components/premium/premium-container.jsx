import React, { forwardRef } from 'react';
import styles from './premium-container.module.css';
import PremiumCard from './premium-card/premium-card';
import PremiumCardOrange from './premium-card/premium-card-orange';
import circles from '../../assets/pictures/premium-circles.svg';

const PremiumContainer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <p className={styles.premium}>Premium</p>
      <p className={styles.premiumDecor}>Premium</p>
      <div className={styles.texts}>
        <p className={styles.text1}>
          Добавьте <span className={styles.textDecor}>более</span> 1 человека
        </p>
        <p className={styles.text2}>
          Получайте <span className={styles.textDecor}>уведомления</span> об истечении <br /> срока
          годности
        </p>
        <p className={styles.text3}>
          <span className={styles.textDecor}>Рекомендации</span> по хранению продуктов
        </p>
      </div>
      <div className={styles.cards}>
        <PremiumCardOrange period="1 месяц" cost="199 руб" />
        <PremiumCard period="3 месяца" price="169 руб/мес" cost="507 руб" />
        <PremiumCard period="6 месяцев" price="149 руб/мес" cost="849 руб" />
        <PremiumCard period="12 месяцев" price="129 руб/мес" cost="1548 руб" />
      </div>
      <div className={styles.bottomTexts}>
        <p className={styles.bottomText1}>Ещё свежее - в Премиуме!</p>
        <p className={styles.bottomText2}>
          Пробный период <span className={styles.textDecor}>30</span> дней!
        </p>
      </div>
      <img className={styles.circles} src={circles} alt="circles" />
    </div>
  );
});

export default PremiumContainer;
