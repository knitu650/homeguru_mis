import React from 'react';
import styles from './Spinner.module.css';

const Spinner = ({ size = 'md', fullScreen = false, className = '' }) => {
  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        <div className={`${styles.spinner} ${styles[size]} ${className}`} />
      </div>
    );
  }

  return <div className={`${styles.spinner} ${styles[size]} ${className}`} />;
};

export default Spinner;
