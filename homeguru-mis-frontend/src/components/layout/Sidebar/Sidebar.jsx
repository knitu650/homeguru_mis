import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  FiHome,
  FiUsers,
  FiBookOpen,
  FiCalendar,
  FiCheckSquare,
  FiFileText,
  FiDollarSign,
  FiUserCheck,
  FiTruck,
  FiSettings,
} from 'react-icons/fi';
import { setSidebarCollapsed } from 'store/slices/uiSlice';
import styles from './Sidebar.module.css';

const menuItems = [
  {
    section: 'Main',
    items: [
      { label: 'Dashboard', icon: FiHome, path: '/dashboard' },
      { label: 'Students', icon: FiUsers, path: '/students' },
      { label: 'Teachers', icon: FiUserCheck, path: '/teachers' },
      { label: 'Attendance', icon: FiCheckSquare, path: '/attendance' },
    ],
  },
  {
    section: 'Academic',
    items: [
      { label: 'Classes', icon: FiBookOpen, path: '/classes' },
      { label: 'Assignments', icon: FiFileText, path: '/assignments' },
      { label: 'Examinations', icon: FiCalendar, path: '/examinations' },
      { label: 'Timetable', icon: FiCalendar, path: '/timetable' },
    ],
  },
  {
    section: 'Management',
    items: [
      { label: 'Fees', icon: FiDollarSign, path: '/fees' },
      { label: 'Transport', icon: FiTruck, path: '/transport' },
      { label: 'Settings', icon: FiSettings, path: '/settings' },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { sidebarCollapsed, isMobile } = useSelector(state => state.ui);

  const handleOverlayClick = () => {
    if (isMobile) {
      dispatch(setSidebarCollapsed(true));
    }
  };

  const sidebarClasses = [
    styles.sidebar,
    sidebarCollapsed && styles.collapsed,
    !sidebarCollapsed && isMobile && styles.open,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <aside className={sidebarClasses}>
        <nav className={styles.menu}>
          {menuItems.map((section, index) => (
            <div key={index} className={styles.menuSection}>
              <div className={styles.sectionTitle}>{section.section}</div>
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.path);

                return (
                  <NavLink
                    key={itemIndex}
                    to={item.path}
                    className={`${styles.menuItem} ${isActive ? styles.active : ''}`}
                  >
                    <span className={styles.icon}>
                      <Icon size={20} />
                    </span>
                    <span className={styles.label}>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
      {isMobile && !sidebarCollapsed && (
        <div className={`${styles.overlay} ${styles.active}`} onClick={handleOverlayClick} />
      )}
    </>
  );
};

export default Sidebar;
