import React, { useContext } from 'react';
import { UserContext } from '../../../../../../services/user-context';
import SettingsInput from './ui/settings-input/settings-input';
import { DeleteAccountModal } from '../../../../../ui/modal/delete-account-modal';
import styles from './settings.module.css';
import door from '../../../../../../assets/pictures/main-door.svg';

const Settings = () => {
  const { user, fridgeName, logOut } = useContext(UserContext);

  const handleLogoutClick = () => {
    logOut();
  };

  const handleDeleteAccount = () => {
    DeleteAccountModal();
  };

  return (
    <>
      <p className={styles.settingsTitle}>Настройки</p>
      <ul className={styles.settingsList}>
        <SettingsInput label="Никнейм" placeholder={user.name} />
        <SettingsInput label="Логин" placeholder={user.email} />
        <SettingsInput label="Пароль" placeholder={user.password} />
        <div className={styles.premium}>
          <SettingsInput
            label="Премиум подписка"
            placeholder={
              fridgeName
                ? user.fridges.filter((fridge) => fridge.name === fridgeName)[0].premiumUntil
                  ? 'До ' +
                    user.fridges.filter((fridge) => fridge.name === fridgeName)[0].premiumUntil
                  : 'Нет премиума'
                : 'Выберите холодильник'
            }
          />
          <button className={styles.premiumButton}>Изменить план</button>
        </div>
      </ul>
      <div className={styles.bottom}>
        <button className={styles.premiumButton} onClick={handleDeleteAccount}>
          Удалить аккаунт
        </button>
        <button className={styles.door} onClick={handleLogoutClick}>
          <img alt="log out" src={door} />
          <p className={styles.doorText}>Выйти</p>
        </button>
      </div>
    </>
  );
};

export default Settings;
