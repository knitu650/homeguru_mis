import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './SearchBar.module.css';

const SearchBar = ({
  value = '',
  onChange,
  placeholder = 'Search...',
  onClear,
  className = '',
}) => {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else {
      onChange({ target: { value: '' } });
    }
  };

  return (
    <div className={`${styles.searchBar} ${className}`}>
      <span className={styles.icon}>
        <FiSearch size={18} />
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
      {value && (
        <button className={styles.clearButton} onClick={handleClear}>
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
