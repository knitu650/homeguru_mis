import React from 'react';
import { FiMenu, FiBell, FiMoon, FiSun } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, toggleTheme } from '@store/slices/uiSlice';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.ui);
  
  // Mock user data
  const user = {
    name: 'Admin User',
    role: 'Administrator',
    avatar: 'AU',
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuButton} onClick={handleToggleSidebar}>
          <FiMenu size={24} />
        </button>
        <div className={styles.logo}>HomeGuru</div>
      </div>

      <div className={styles.right}>
        <button className={styles.iconButton} onClick={handleToggleTheme}>
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>

        <button className={styles.iconButton}>
          <FiBell size={20} />
          <span className={styles.badge}>5</span>
        </button>

        <div className={styles.profile}>
          <div className={styles.avatar}>{user.avatar}</div>
          <div className={styles.profileInfo}>
            <div className={styles.profileName}>{user.name}</div>
            <div className={styles.profileRole}>{user.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
