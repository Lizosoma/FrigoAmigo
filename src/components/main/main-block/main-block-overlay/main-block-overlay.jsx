import React, { useState, useContext } from 'react';
import RegisterForm from './forms/register-form/register-form';
import styles from './main-block-overlay.module.css';
import LoginForm from './forms/login-form/login-form';
import LoginFormMobile from './forms/login-form/login-form-mobile';
import RegisterFormMobile from './forms/register-form/register-form-mobile';
import { UserContext } from '../../../../services/user-context';
import FridgesList from './fridges-list/fridges-list';

const MainBlockOverlay = () => {
  const { authenticated, isMobile } = useContext(UserContext);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleShowRegisterForm = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleShowLoginForm = () => {
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };

  return (
    <div className={styles.overlay}>
      {showRegisterForm &&
        !authenticated &&
        (isMobile ? (
          <RegisterFormMobile handleShowLoginForm={handleShowLoginForm} />
        ) : (
          <RegisterForm handleShowLoginForm={handleShowLoginForm} />
        ))}
      {showLoginForm &&
        !authenticated &&
        (isMobile ? (
          <LoginFormMobile handleShowRegisterForm={handleShowRegisterForm} />
        ) : (
          <LoginForm handleShowRegisterForm={handleShowRegisterForm} />
        ))}
      {authenticated && <FridgesList />}
    </div>
  );
};

export default MainBlockOverlay;
