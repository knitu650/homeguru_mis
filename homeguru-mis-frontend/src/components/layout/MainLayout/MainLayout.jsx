import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsMobile } from '@store/slices/uiSlice';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { sidebarCollapsed, isMobile } = useSelector(state => state.ui);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      dispatch(setIsMobile(mobile));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  const contentClasses = [
    styles.content,
    sidebarCollapsed && !isMobile && styles.collapsed,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={contentClasses}>
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
