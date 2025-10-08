export const formatCurrency = (amount, currency = 'INR', locale = 'en-IN') => {
  if (amount === null || amount === undefined) return '';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatNumber = (num, decimals = 0) => {
  if (num === null || num === undefined) return '';
  return Number(num).toFixed(decimals);
};

export const formatPercentage = (value, decimals = 2) => {
  if (value === null || value === undefined) return '';
  return `${Number(value).toFixed(decimals)}%`;
};

export const parseNumber = str => {
  const num = parseFloat(str);
  return isNaN(num) ? 0 : num;
};

export const roundNumber = (num, decimals = 2) => {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

export const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

export const getPercentage = (value, total) => {
  if (!total) return 0;
  return (value / total) * 100;
};

export default {
  formatCurrency,
  formatNumber,
  formatPercentage,
  parseNumber,
  roundNumber,
  clamp,
  getPercentage,
};
