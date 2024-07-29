import React, { useState, useCallback } from 'react';
import styles from './users-list.module.css';
import deleteUser from '../../../../../../../assets/pictures/main-deleteUser.svg';
import makeAdmin from '../../../../../../../assets/pictures/main-crown.svg';

const UsersList = ({ user, fridgeName }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showEditIcons, setShowEditIcons] = useState(false);

  const handleEdit = useCallback(() => {
    setShowEditIcons(true);
    setIsEditMode(true);
  }, []);

  const saveChanges = useCallback(() => {
    setShowEditIcons(false);
    setIsEditMode(false);
  }, []);

  const handleCancelEdit = useCallback(() => {
    setShowEditIcons(false);
    setIsEditMode(false);
  }, []);

  return (
    <>
      {fridgeName && (
        <ul className={styles.usersList}>
          <p className={styles.usersTitle}>Пользователи</p>
          <li className={styles.usersItem}>
            {user.name}
            <img src={makeAdmin} alt="admin" className={styles.admin} />
          </li>
          {user.fridges
            .filter((fridge) => fridge.name === fridgeName)[0]
            .usersEmails.map((user) => (
              <li key={user} className={styles.usersItem}>
                {user}
                {showEditIcons && (
                  <>
                    <img src={deleteUser} alt="deleteUser" className={styles.deleteUser} />
                    <img src={makeAdmin} alt="makeAdmin" className={styles.makeAdmin} />
                  </>
                )}
              </li>
            ))}
        </ul>
      )}
      <div className={styles.edit}>
        {isEditMode ? (
          <>
            <button onClick={saveChanges} className={styles.btn_save}>
              Сохранить
            </button>
            <button onClick={handleCancelEdit} className={styles.btn_delete}>
              Удалить холодильник
            </button>
          </>
        ) : (
          <button onClick={handleEdit} className={styles.btn_edit}>
            Редактировать
          </button>
        )}
      </div>
    </>
  );
};

export default UsersList;
