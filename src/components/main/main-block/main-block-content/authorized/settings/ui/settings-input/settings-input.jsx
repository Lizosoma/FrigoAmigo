import React from 'react';
import styles from './settings-input.module.css';

const SettingsInput = ({ label, placeholder, button }) => {
  return (
    <li className={styles.settingsItem}>
      <label className={styles.settingsLabel}>{label}</label>
      <input className={styles.settingsInput} placeholder={placeholder}></input>
      <button>{button}</button>
    </li>
  );
};

export default SettingsInput;
