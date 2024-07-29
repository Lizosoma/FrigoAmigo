import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../ui/form-input/form-input';
import { FormButton } from '../ui/form-button/form-button';
import axios from 'axios';
import styles from '../form.module.css';
import WhiteButton from '../../../../../ui/white-button/white-button';
import { RegisteredModal } from '../../../../../ui/modal/registered-modal';
import FormArrowMobile from '../ui/form-arrow-mobile/form-arrow-mobile';

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

const RegisterFormMobile = ({ handleShowLoginForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isArrowClickedOne, setIsArrowClickedOne] = useState(false);
  const [isArrowClickedTwo, setIsArrowClickedTwo] = useState(false);
  const [isArrowClickedThree, setIsArrowClickedThree] = useState(false);
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

  const handleArrowClickOne = () => {
    setIsArrowClickedOne(true);
  };

  const handleArrowClickTwo = () => {
    setIsArrowClickedTwo(true);
  };

  const handleArrowClickThree = () => {
    setIsArrowClickedThree(true);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <ul className={styles.formList}>
          <li
            className={
              styles.formItem + (isArrowClickedOne ? ' animate__animated animate__fadeOutLeft' : '')
            }
          >
            <FormInput
              register={register}
              error={errors.email}
              name="email"
              type="email"
              placeholder="Логин"
            />
            <FormArrowMobile onClick={handleArrowClickOne} />
          </li>
          <li
            className={
              styles.formItem +
              (isArrowClickedOne ? ' animate__animated animate__fadeInRight' : '') +
              (isArrowClickedTwo ? ' animate__animated animate__fadeOutLeft' : '')
            }
            style={{ display: isArrowClickedOne ? '' : 'none' }}
          >
            <FormInput
              register={register}
              error={errors.password}
              name="password"
              type="password"
              placeholder="Пароль"
            />
            <FormArrowMobile onClick={handleArrowClickTwo} />
          </li>
          <li
            className={
              styles.formItem +
              (isArrowClickedTwo ? ' animate__animated animate__fadeInRight' : '') +
              (isArrowClickedThree ? ' animate__animated animate__fadeOutLeft' : '')
            }
            style={{ display: isArrowClickedTwo ? '' : 'none' }}
          >
            <FormInput
              register={register}
              error={errors.name}
              name="name"
              type="text"
              placeholder="Никнейм"
            />
            <FormArrowMobile onClick={handleArrowClickThree} />
          </li>
          <li
            className={
              styles.formItem +
              (isArrowClickedThree ? ' animate__animated animate__fadeInRight' : '')
            }
            style={{ display: isArrowClickedThree ? '' : 'none' }}
          >
            <FormButton text="Зарегистрироваться" onSubmit={handleSubmit(onSubmit)} />
          </li>
        </ul>
      </form>
      <WhiteButton text="Назад" onClick={handleBack} />
    </div>
  );
};

export default RegisterFormMobile;
