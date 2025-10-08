import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/teachers">Teachers</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
