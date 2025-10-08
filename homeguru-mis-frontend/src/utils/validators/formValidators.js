export const required = value => {
  return value ? undefined : 'This field is required';
};

export const email = value => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(value) ? undefined : 'Invalid email address';
};

export const minLength = min => value => {
  return value && value.length >= min
    ? undefined
    : `Must be at least ${min} characters`;
};

export const maxLength = max => value => {
  return value && value.length <= max
    ? undefined
    : `Must be ${max} characters or less`;
};

export const phone = value => {
  const regex = /^[0-9]{10}$/;
  return regex.test(value) ? undefined : 'Invalid phone number';
};

export const number = value => {
  return !isNaN(value) ? undefined : 'Must be a number';
};

export const url = value => {
  try {
    new URL(value);
    return undefined;
  } catch {
    return 'Invalid URL';
  }
};

export const match = (fieldName, message) => (value, values) => {
  return value === values[fieldName] ? undefined : message;
};

export const composeValidators = (...validators) => value => {
  return validators.reduce(
    (error, validator) => error || validator(value),
    undefined
  );
};

export default {
  required,
  email,
  minLength,
  maxLength,
  phone,
  number,
  url,
  match,
  composeValidators,
};
