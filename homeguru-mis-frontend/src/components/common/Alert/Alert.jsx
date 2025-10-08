import React from 'react';
import {
  FiCheckCircle,
  FiAlertCircle,
  FiAlertTriangle,
  FiInfo,
  FiX,
} from 'react-icons/fi';
import styles from './Alert.module.css';

const icons = {
  success: FiCheckCircle,
  error: FiAlertCircle,
  warning: FiAlertTriangle,
  info: FiInfo,
};

const Alert = ({
  variant = 'info',
  title,
  message,
  onClose,
  className = '',
}) => {
  const Icon = icons[variant];

  return (
    <div className={`${styles.alert} ${styles[variant]} ${className}`}>
      <div className={styles.icon}>
        <Icon size={20} />
      </div>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.message}>{message}</div>
      </div>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose}>
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default Alert;
