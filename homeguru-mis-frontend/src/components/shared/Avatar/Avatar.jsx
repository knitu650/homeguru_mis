import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({
  src,
  alt,
  name,
  size = 'md',
  online = false,
  className = '',
}) => {
  const getInitials = name => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  };

  const avatarClasses = [
    styles.avatar,
    styles[size],
    online && styles.online,
    !src && styles.initials,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={avatarClasses}>
      {src ? (
        <img src={src} alt={alt || name} className={styles.image} />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;
