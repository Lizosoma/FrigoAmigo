import React, { useContext } from 'react';
import { UserContext } from '../../../../../../services/user-context';
import styles from './list-of-fridges.module.css';

const ListOfFridgesMobile = ({ user }) => {
  const { fridgeName, setFridgeName } = useContext(UserContext);

  return fridgeName ? (
    <select
      className={styles.fridgesSelect}
      value={fridgeName}
      onChange={(e) => setFridgeName(e.target.value)}
    >
      {user.fridges.map((fridge) => (
        <option key={fridge.name} value={fridge.name} className={styles.fridge}>
          {fridge.name}
        </option>
      ))}
    </select>
  ) : (
    <p className={styles.createFridgeMobile}>Создайте холодильник</p>
  );
};

export default ListOfFridgesMobile;
