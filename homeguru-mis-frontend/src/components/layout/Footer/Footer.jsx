import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>© {currentYear} HomeGuru MIS. All rights reserved.</span>
        <span>|</span>
        <a href="#" className={styles.link}>
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className={styles.link}>
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
