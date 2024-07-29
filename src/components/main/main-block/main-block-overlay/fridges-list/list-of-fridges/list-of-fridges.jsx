import React, { useContext } from 'react';
import { UserContext } from '../../../../../../services/user-context';
import styles from './list-of-fridges.module.css';

const ListOfFridges = ({ user }) => {
  const { fridgeName, setFridgeName } = useContext(UserContext);

  const handleChooseFridge = (fridge) => {
    setFridgeName(fridge.name);
  };

  return (
    <ul className={styles.fridgesList}>
      {fridgeName ? (
        user.fridges.map((fridge) => (
          <li
            key={fridge.name}
            className={styles.fridge}
            onClick={() => handleChooseFridge(fridge)}
          >
            <p className={fridge.name === fridgeName ? styles.fridgeNameActive : styles.fridgeName}>
              {fridge.name}
            </p>
          </li>
        ))
      ) : (
        <p className={styles.createFridge}>Создайте холодильник</p>
      )}
    </ul>
  );
};

export default ListOfFridges;
