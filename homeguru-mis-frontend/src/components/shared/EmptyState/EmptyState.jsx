import React from 'react';
import { FiInbox } from 'react-icons/fi';
import Button from 'components/common/Button';
import styles from './EmptyState.module.css';

const EmptyState = ({
  icon: Icon = FiInbox,
  title = 'No data found',
  description = 'There are no items to display at the moment.',
  action,
  actionLabel,
  onAction,
}) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.icon}>
        <Icon size={64} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {(action || (actionLabel && onAction)) && (
        <div className={styles.action}>
          {action || <Button onClick={onAction}>{actionLabel}</Button>}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
