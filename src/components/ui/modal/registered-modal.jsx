import Swal from 'sweetalert2';
import styles from './modal.module.css';

export const RegisteredModal = () => {
  return Swal.fire({
    title: 'Вы успешно зарегистрировались! Пожалуйста, войдите.',
    color: '#272826',
    buttonsStyling: false,
    customClass: {
      title: styles.swalTitle,
      confirmButton: styles.swalConfirmButton,
    },
  });
};
