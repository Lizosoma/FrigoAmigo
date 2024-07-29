import React from 'react';
import Swal from 'sweetalert2';
import styles from './modal.module.css';

export const DeleteAccountModal = () => {
  return Swal.fire({
    title: 'Вы уверены, что хотите удалить аккаунт? ',
    text: 'Деньги за остаток по подписке не возвращаются. Все ваши холодильники будут удалены',
    showCancelButton: true,
    buttonsStyling: false,
    cancelButtonText: 'Нет',
    confirmButtonText: 'Да',
    customClass: {
      title: styles.swalTitle,
      text: styles.swalText,
      confirmButton: styles.swalConfirmButton,
      cancelButton: styles.swalCancelButton,
    },
    preConfirm: async () => {
      try {
        // deleting
      } catch (error) {
        Swal.showValidationMessage(`Request failed: ${error}`);
      }
    },
  });
};
