import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
