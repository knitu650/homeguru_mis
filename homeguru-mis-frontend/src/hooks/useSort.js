import { useState, useMemo } from 'react';

const useSort = (data, initialColumn = null, initialDirection = 'asc') => {
  const [sortColumn, setSortColumn] = useState(initialColumn);
  const [sortDirection, setSortDirection] = useState(initialDirection);

  const sortedData = useMemo(() => {
    if (!sortColumn || !data) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = getNestedValue(a, sortColumn);
      const bValue = getNestedValue(b, sortColumn);

      // Handle null/undefined values
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      // Convert to lowercase for string comparison
      const aCompare = typeof aValue === 'string' ? aValue.toLowerCase() : aValue;
      const bCompare = typeof bValue === 'string' ? bValue.toLowerCase() : bValue;

      let comparison = 0;
      if (aCompare > bCompare) {
        comparison = 1;
      } else if (aCompare < bCompare) {
        comparison = -1;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [data, sortColumn, sortDirection]);

  const handleSort = column => {
    if (sortColumn === column) {
      // Toggle direction if same column
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      // New column, set to ascending
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const resetSort = () => {
    setSortColumn(initialColumn);
    setSortDirection(initialDirection);
  };

  const setSortConfig = (column, direction) => {
    setSortColumn(column);
    setSortDirection(direction);
  };

  return {
    sortedData,
    sortColumn,
    sortDirection,
    handleSort,
    resetSort,
    setSortConfig,
  };
};

// Helper function to get nested object values
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

export default useSort;
