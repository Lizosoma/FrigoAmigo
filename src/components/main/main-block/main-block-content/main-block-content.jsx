import React, { useContext } from 'react';
import styles from './main-block-content.module.css';
import Greeting from './unauthorized/greeting';
import PersonalAccount from './authorized/personal-account';
import { UserContext } from '../../../../services/user-context';

const MainBlockContent = () => {
  const { authenticated } = useContext(UserContext);

  return (
    <div className={styles.content}>
      {!authenticated && <Greeting />}
      {authenticated && <PersonalAccount />}
    </div>
  );
};

export default MainBlockContent;
