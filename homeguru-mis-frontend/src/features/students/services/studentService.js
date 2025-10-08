import apiClient from '@services/api/apiClient';
import { API_ENDPOINTS } from '@config/api.config';

export const studentService = {
  getAll: async (params) => {
    return apiClient.get(API_ENDPOINTS.students.list, { params });
  },

  getById: async (id) => {
    const url = apiClient.buildUrl(API_ENDPOINTS.students.get, { id });
    return apiClient.get(url);
  },

  create: async (data) => {
    return apiClient.post(API_ENDPOINTS.students.create, data);
  },

  update: async (id, data) => {
    const url = apiClient.buildUrl(API_ENDPOINTS.students.update, { id });
    return apiClient.put(url, data);
  },

  delete: async (id) => {
    const url = apiClient.buildUrl(API_ENDPOINTS.students.delete, { id });
    return apiClient.delete(url);
  },

  enroll: async (id, data) => {
    const url = apiClient.buildUrl(API_ENDPOINTS.students.enroll, { id });
    return apiClient.post(url, data);
  },
};

export default studentService;
