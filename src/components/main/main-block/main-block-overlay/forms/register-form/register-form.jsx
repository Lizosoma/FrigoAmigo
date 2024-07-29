import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../ui/form-input/form-input';
import { FormButton } from '../ui/form-button/form-button';
import axios from 'axios';
import styles from '../form.module.css';
import WhiteButton from '../../../../../ui/white-button/white-button';
import { RegisteredModal } from '../../../../../ui/modal/registered-modal';

const schema = Yup.object().shape({
  email: Yup.string().email('Неверный формат почты').required('Необходимо ввести почту'),
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
      'Пароль должен содержать: 8 или более символов, хотя бы 1 цифру, 1 заглавную букву, 1 строчную букву и 1 спецсимвол',
    )
    .required('Необходимо ввести пароль'),
  name: Yup.string()
    .min(3, 'Минимальная длина имени 3')
    .max(16, 'Максимальная длина имени 15')
    .required('Необходимо ввести имя'),
});

const RegisterForm = ({ handleShowLoginForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password, name }) => {
    const postData = async () => {
      try {
        // const response = await axios.post('http://localhost:8080/auth/register', {
        //   name: name,
        //   email: email,
        //   password: password,
        // });

        // ============================================================
        const localDB = JSON.parse(localStorage.getItem('localDB')) || { users: [] };

        localDB.users.push({
          name: name,
          email: email,
          password: password,
          fridges: [],
        });

        localStorage.setItem('localDB', JSON.stringify(localDB));
        // ============================================================

        handleShowLoginForm();
        RegisteredModal();
      } catch (error) {
        console.error(`Error posting data: ${error}`);
      } finally {
      }
    };
    postData();
  };

  const handleBack = () => {
    handleShowLoginForm();
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
        <FormInput
          register={register}
          error={errors.name}
          name="name"
          type="text"
          placeholder="Никнейм"
        />
        <FormButton text="Зарегистрироваться" onSubmit={handleSubmit(onSubmit)} />
      </form>
      <WhiteButton text="Назад" onClick={handleBack} />
    </div>
  );
};

export default RegisterForm;
