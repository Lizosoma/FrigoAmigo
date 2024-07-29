import React, { useContext } from 'react';
import axios from 'axios';
import styles from './code-block.module.css';
import { UserContext } from '../../../../../../../services/user-context';

const CodeBlock = ({ user, fridgeName }) => {
  const { setUser } = useContext(UserContext);
  const handleChangeInviteCode = () => {
    const postInviteCode = async () => {
      try {
        let body = {
          fridgeName: fridgeName,
          ownerEmail: user.email,
        };
        const response = await axios.post('http://localhost:8080/fridge/changeInviteCode', body, {
          withCredentials: true,
        });
        console.log(response.data);
        if (response.status === 200) {
          let body = {
            userEmail: user.email,
          };
          const secondResponse = await axios.post('http://localhost:8080/user/getUserData', body, {
            withCredentials: true,
          });
          console.log(secondResponse.data);
          setUser(secondResponse.data);
        }
      } catch (error) {
        console.error(`Error posting data: ${error}`);
      }
    };
    postInviteCode();
  };

  return (
    <>
      {fridgeName && (
        <div className={styles.code}>
          <p className={styles.codeTitle}>код доступа</p>
          <div className={styles.codeBlock}>
            <span className={styles.codeNums}>
              {user.fridges.filter((fridge) => fridge.name === fridgeName)[0].inviteCode}
            </span>
            <button className={styles.codeButton} onClick={handleChangeInviteCode}></button>
          </div>
        </div>
      )}
    </>
  );
};

export default CodeBlock;
