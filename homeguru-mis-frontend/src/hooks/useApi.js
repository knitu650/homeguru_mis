import { useState, useCallback } from 'react';
import apiClient from '@services/api/apiClient';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (apiFunc, ...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFunc(...args);
      setLoading(false);
      return response;
    } catch (err) {
      setError(err.message || 'An error occurred');
      setLoading(false);
      throw err;
    }
  }, []);

  const get = useCallback((url, config) => request(apiClient.get, url, config), [request]);
  const post = useCallback((url, data, config) => request(apiClient.post, url, data, config), [request]);
  const put = useCallback((url, data, config) => request(apiClient.put, url, data, config), [request]);
  const patch = useCallback((url, data, config) => request(apiClient.patch, url, data, config), [request]);
  const del = useCallback((url, config) => request(apiClient.delete, url, config), [request]);

  return {
    loading,
    error,
    get,
    post,
    put,
    patch,
    del,
  };
};

export default useApi;
