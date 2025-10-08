export const buildQueryString = params => {
  const query = new URLSearchParams();
  
  Object.keys(params).forEach(key => {
    const value = params[key];
    if (value !== null && value !== undefined && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(item => query.append(key, item));
      } else {
        query.append(key, value);
      }
    }
  });
  
  const queryString = query.toString();
  return queryString ? `?${queryString}` : '';
};

export const replaceUrlParams = (url, params) => {
  let newUrl = url;
  Object.keys(params).forEach(key => {
    newUrl = newUrl.replace(`:${key}`, params[key]);
  });
  return newUrl;
};

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const retry = async (fn, retries = 3, delayMs = 1000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      await delay(delayMs);
      return retry(fn, retries - 1, delayMs);
    }
    throw error;
  }
};

export default {
  buildQueryString,
  replaceUrlParams,
  delay,
  retry,
};
