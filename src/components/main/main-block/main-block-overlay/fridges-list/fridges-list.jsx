import React, { useContext } from 'react';
import { UserContext } from '../../../../../services/user-context';
import styles from './fridges-list.module.css';
import ListOfFridges from './list-of-fridges/list-of-fridges';
import ListOfFridgesMobile from './list-of-fridges/list-of-fridges-mobile';
import WhiteButton from '../../../../ui/white-button/white-button';
import { CreateFridgeModal } from '../../../../ui/modal/create-fridge-modal';
import CreateFridgeMobile from '../../../../ui/create-fridge-mobile/create-fridge-mobile';

const FridgesList = () => {
  const { user, setUser, setFridgeName, isMobile } = useContext(UserContext);

  const createFridge = () => {
    CreateFridgeModal({ user, setUser, setFridgeName });
  };

  return (
    <div className={styles.fridgesList}>
      <p className={styles.privet}>Привет</p>
      <p className={styles.adminName}>{user.name}</p>
      {isMobile ? <ListOfFridgesMobile user={user} /> : <ListOfFridges user={user} />}
      {isMobile ? (
        <CreateFridgeMobile onClick={createFridge} />
      ) : (
        <WhiteButton text="Создать холодильник" onClick={createFridge} />
      )}
    </div>
  );
};

export default FridgesList;
