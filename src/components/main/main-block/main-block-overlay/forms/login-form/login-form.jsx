import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { FormInput } from '../ui/form-input/form-input';
import { FormButton } from '../ui/form-button/form-button';
import styles from '../form.module.css';
import WhiteButton from '../../../../../ui/white-button/white-button';
import { UserContext } from '../../../../../../services/user-context';

const LoginForm = ({ handleShowRegisterForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register}
          error={errors.email}
          name="email"
          type="email"
          placeholder="Логин"
        />
        <FormInput
          register={register}
          error={errors.password}
          name="password"
          type="password"
          placeholder="Пароль"
        />
        <FormButton
          text="Войти"
          onSubmit={handleSubmit(onSubmit)}
          isLoading={isLoading}
          disabled={isButtonDisabled}
        />
      </form>
      <WhiteButton text="Забыли пароль?" onClick={handleToRegister} />
      <WhiteButton text="Зарегистрироваться" onClick={handleToRegister} />
    </div>
  );
};

export default LoginForm;
