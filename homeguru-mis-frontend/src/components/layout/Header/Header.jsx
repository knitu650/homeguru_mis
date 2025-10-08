import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Homeguru MIS</div>
      <div className={styles.user}>User Profile</div>
    </header>
  );
};

export default Header;
