import Swal from 'sweetalert2';
import axios from 'axios';
import styles from './modal.module.css';

export const CreateFridgeModal = ({ user, setUser, setFridgeName }) => {
  return Swal.fire({
    title: 'Введите название холодильника',
    input: 'text',
    showCancelButton: true,
    buttonsStyling: false,
    cancelButtonText: 'Отмена',
    confirmButtonText: 'Создать',
    customClass: {
      title: styles.swalTitle,
      confirmButton: styles.swalConfirmButton,
      cancelButton: styles.swalCancelButton,
    },
    preConfirm: async (fridgeName) => {
      if (!fridgeName) {
        Swal.showValidationMessage('Введите название холодильника');
        return;
      }
      try {
        const body = {
          name: fridgeName,
          ownerEmail: user.email,
        };
        const response = await axios.post('http://localhost:8080/fridge/create', body, {
          withCredentials: true,
        });
        console.log('Fridge created', response.data);
        const userResponse = await axios.post(
          'http://localhost:8080/user/getUserData',
          { userEmail: user.email },
          {
            withCredentials: true,
          },
        );
        setUser(userResponse.data);
      } catch (error) {
        Swal.showValidationMessage(`Request failed: ${error}`);
      }
    },
  });
};
