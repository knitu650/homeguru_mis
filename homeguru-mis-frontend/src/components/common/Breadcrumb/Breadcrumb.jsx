import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          {index === items.length - 1 ? (
            <span className={styles.active}>{item.label}</span>
          ) : (
            <>
              <Link to={item.path} className={styles.link}>
                {item.label}
              </Link>
              <span className={styles.separator}>
                <FiChevronRight size={14} />
              </span>
            </>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
