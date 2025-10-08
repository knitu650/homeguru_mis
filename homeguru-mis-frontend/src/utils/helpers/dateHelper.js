import { format, parseISO, isValid, differenceInDays, addDays, subDays } from 'date-fns';

export const formatDate = (date, pattern = 'dd/MM/yyyy') => {
  if (!date) return '';
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return isValid(parsedDate) ? format(parsedDate, pattern) : '';
};

export const formatDateTime = (date, pattern = 'dd/MM/yyyy HH:mm') => {
  return formatDate(date, pattern);
};

export const formatTime = (date, pattern = 'HH:mm') => {
  return formatDate(date, pattern);
};

export const getDateDifference = (date1, date2) => {
  const d1 = typeof date1 === 'string' ? parseISO(date1) : date1;
  const d2 = typeof date2 === 'string' ? parseISO(date2) : date2;
  return differenceInDays(d1, d2);
};

export const addDaysToDate = (date, days) => {
  const d = typeof date === 'string' ? parseISO(date) : date;
  return addDays(d, days);
};

export const subtractDaysFromDate = (date, days) => {
  const d = typeof date === 'string' ? parseISO(date) : date;
  return subDays(d, days);
};

export const isDateValid = date => {
  const d = typeof date === 'string' ? parseISO(date) : date;
  return isValid(d);
};

export default {
  formatDate,
  formatDateTime,
  formatTime,
  getDateDifference,
  addDaysToDate,
  subtractDaysFromDate,
  isDateValid,
};
