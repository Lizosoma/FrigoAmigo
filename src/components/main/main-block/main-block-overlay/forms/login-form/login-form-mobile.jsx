import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { FormInput } from '../ui/form-input/form-input';
import { FormButton } from '../ui/form-button/form-button';
import styles from '../form.module.css';
import WhiteButton from '../../../../../ui/white-button/white-button';
import { UserContext } from '../../../../../../services/user-context';
import 'animate.css';
import FormArrowMobile from '../ui/form-arrow-mobile/form-arrow-mobile';

const LoginFormMobile = ({ handleShowRegisterForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isArrowClickedd, setIsArrowClickedd] = useState(false);
  const { setAuthenticated, setUser, setFridgeName } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  });

  const onSubmit = ({ email, password }) => {
    setIsLoading(true);
    setIsButtonDisabled(true);
    const postData = async () => {
      try {
        // const response = await axios.post('http://localhost:8080/auth/login', {
        //   email: email,
        //   password: password,
        // });

        // ============================================================
        const localDB = JSON.parse(localStorage.getItem('localDB')) || { users: [] };
        if (localDB.users.find((user) => user.email === email && user.password === password)) {
          setAuthenticated(true);
          setUser(localDB.users.find((user) => user.email === email && user.password === password));
          setFridgeName(
            localDB.users.find((user) => user.email === email && user.password === password)
              .fridges[0].name,
          );
        }
        // ============================================================
      } catch (error) {
        console.error(`Error posting data: ${error}`);
      } finally {
        setIsLoading(false);
        setIsButtonDisabled(false);
      }
    };
    postData();
  };

  const handleToRegister = () => {
    handleShowRegisterForm();
  };

  const handleArrowClick = () => {
    setIsArrowClicked(true);
  };

  const handleArrowClickk = () => {
    setIsArrowClickedd(true);
  };

  return (
    <div className={styles.formContainer}>
      <form
        // style={{ display: handleShowRegisterForm ? 'none' : 'flex' }}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ul className={styles.formList}>
          <li
            className={
              styles.formItem + (isArrowClicked ? ' animate__animated animate__fadeOutLeft' : '')
            }
          >
            <FormInput
              register={register}
              error={errors.email}
              name="email"
              type="email"
              placeholder="Логин"
            />
            <FormArrowMobile onClick={handleArrowClick} />
          </li>
          <li
            className={
              styles.formItem +
              (isArrowClicked ? ' animate__animated animate__fadeInRight' : '') +
              (isArrowClickedd ? ' animate__animated animate__fadeOutLeft' : '')
            }
            style={{ display: isArrowClicked ? '' : 'none' }}
          >
            <FormInput
              register={register}
              error={errors.password}
              name="password"
              type="password"
              placeholder="Пароль"
            />
            <FormArrowMobile onClick={handleArrowClickk} />
          </li>
          <li
            className={
              styles.formItem + (isArrowClickedd ? ' animate__animated animate__fadeInRight' : '')
            }
            style={{ display: isArrowClickedd ? '' : 'none' }}
          >
            <FormButton text="Войти" onSubmit={handleSubmit(onSubmit)} />
          </li>
        </ul>
      </form>
      <div className={styles.whiteButtons}>
        <WhiteButton text="Забыли пароль?" onClick={handleToRegister} />
        <WhiteButton text="Зарегистрироваться" onClick={handleToRegister} />
      </div>
    </div>
  );
};

export default LoginFormMobile;
