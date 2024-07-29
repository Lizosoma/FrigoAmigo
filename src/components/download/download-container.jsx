import React, { forwardRef } from 'react';
import styles from './download-container.module.css';
import bg from '../../assets/pictures/download-bg.png';
import qr from '../../assets/pictures/QRcode.png';
import gp from '../../assets/pictures/download-googlePlay.svg';

const DownloadContainer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.downloadContainer}>
      <img className={styles.bg} alt="bg" src={bg} />
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          Скачай <br /> Приложение
        </div>
        <div className={styles.texts}>
          <div className={styles.text1}>Чтобы заполнить свой </div>
          <div className={styles.text2}>собственный</div>
          <div className={styles.text3}>холодильник!</div>
        </div>
        <img src={qr} alt="qrCode" className={styles.qr}></img>
        <img src={gp} alt="gp" className={styles.gp} />
        <p className={styles.text4}>
          Все права защищены, с полным перечнем правил и особенностей вы не можете ознакомиться. Для
          дальнейшего написания текста делегируйте
        </p>
      </div>
    </div>
  );
});

export default DownloadContainer;
