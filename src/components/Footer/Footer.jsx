import FooterContacts from './FooterContacts';
import React from 'react';

const Footer = React.forwardRef((props, ref) => {
  return (
    <div className="container">
      <div ref={ref} className="footer-heading">
        <div className="footer-heading-web-desktop">Контакты</div>
        <div className="footer-heading-web-mobile">Контакты</div>
      </div>
      <FooterContacts />
    </div>
  );
});

export default Footer;
