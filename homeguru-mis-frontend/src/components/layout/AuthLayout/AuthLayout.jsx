import React from 'react';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoText}>HomeGuru</div>
        </div>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
