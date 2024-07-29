import React from 'react';
import styles from './form-arrow-mobile.module.css';

const FormArrowMobile = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={styles.arrow}
      width="26"
      height="42"
      viewBox="0 0 26 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1202 39.4565L23.2368 21.0793L15.1202 2.35203"
        stroke="#B5B6AF"
        strokeWidth="3.47855"
        strokeLinecap="round"
      />
      <path
        d="M2.36531 39.4565L10.4819 21.0793L2.36532 2.35203"
        stroke="#B5B6AF"
        strokeWidth="3.47855"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FormArrowMobile;
