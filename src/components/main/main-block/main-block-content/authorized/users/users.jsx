import React, { useContext } from 'react';
import { UserContext } from '../../../../../../services/user-context';
import styles from './users.module.css';
import UsersList from './users-list/users-list';
import CodeBlock from './code-block/code-block';

const Users = () => {
  const { user, fridgeName } = useContext(UserContext);

  return (
    <div className={styles.users}>
      <div>
        <p className={styles.fridgeName}>{fridgeName ? fridgeName : 'FRIGOAMIGO'}</p>
        <UsersList user={user} fridgeName={fridgeName} />
      </div>
      <CodeBlock user={user} fridgeName={fridgeName} />
    </div>
  );
};

export default Users;
