import { useState, useMemo } from 'react';

const useFilter = (data, initialFilters = {}) => {
  const [filters, setFilters] = useState(initialFilters);

  const filteredData = useMemo(() => {
    if (!data || Object.keys(filters).length === 0) {
      return data;
    }

    return data.filter(item => {
      return Object.entries(filters).every(([key, value]) => {
        // Skip if filter value is empty, null, or undefined
        if (value === '' || value === null || value === undefined) {
          return true;
        }

        const itemValue = getNestedValue(item, key);

        // Handle different filter types
        if (Array.isArray(value)) {
          // Array filter - check if item value is in array
          return value.includes(itemValue);
        }

        if (typeof value === 'object' && value !== null) {
          // Object filter with operators
          return applyOperatorFilter(itemValue, value);
        }

        // String/Number exact match or contains
        if (typeof itemValue === 'string' && typeof value === 'string') {
          return itemValue.toLowerCase().includes(value.toLowerCase());
        }

        return itemValue === value;
      });
    });
  }, [data, filters]);

  const setFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const removeFilter = key => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const setMultipleFilters = newFilters => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
    }));
  };

  const hasActiveFilters = useMemo(() => {
    return Object.values(filters).some(
      value => value !== '' && value !== null && value !== undefined
    );
  }, [filters]);

  return {
    filteredData,
    filters,
    setFilter,
    removeFilter,
    clearFilters,
    setMultipleFilters,
    hasActiveFilters,
  };
};

// Helper function to get nested object values
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

// Helper function to apply operator-based filters
const applyOperatorFilter = (itemValue, filterConfig) => {
  const { operator, value } = filterConfig;

  switch (operator) {
    case 'equals':
      return itemValue === value;
    case 'notEquals':
      return itemValue !== value;
    case 'contains':
      return String(itemValue).toLowerCase().includes(String(value).toLowerCase());
    case 'startsWith':
      return String(itemValue).toLowerCase().startsWith(String(value).toLowerCase());
    case 'endsWith':
      return String(itemValue).toLowerCase().endsWith(String(value).toLowerCase());
    case 'greaterThan':
      return Number(itemValue) > Number(value);
    case 'greaterThanOrEqual':
      return Number(itemValue) >= Number(value);
    case 'lessThan':
      return Number(itemValue) < Number(value);
    case 'lessThanOrEqual':
      return Number(itemValue) <= Number(value);
    case 'between':
      return Number(itemValue) >= Number(value[0]) && Number(itemValue) <= Number(value[1]);
    case 'in':
      return Array.isArray(value) && value.includes(itemValue);
    case 'notIn':
      return Array.isArray(value) && !value.includes(itemValue);
    default:
      return true;
  }
};

export default useFilter;
