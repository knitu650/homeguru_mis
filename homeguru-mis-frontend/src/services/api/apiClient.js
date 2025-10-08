import axiosInstance from './interceptors';

class ApiClient {
  async get(url, config = {}) {
    return axiosInstance.get(url, config);
  }

  async post(url, data = {}, config = {}) {
    return axiosInstance.post(url, data, config);
  }

  async put(url, data = {}, config = {}) {
    return axiosInstance.put(url, data, config);
  }

  async patch(url, data = {}, config = {}) {
    return axiosInstance.patch(url, data, config);
  }

  async delete(url, config = {}) {
    return axiosInstance.delete(url, config);
  }

  // Upload file
  async upload(url, file, onUploadProgress) {
    const formData = new FormData();
    formData.append('file', file);

    return axiosInstance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  }

  // Upload multiple files
  async uploadMultiple(url, files, onUploadProgress) {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    return axiosInstance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  }

  // Download file
  async download(url, filename) {
    const response = await axiosInstance.get(url, {
      responseType: 'blob',
    });

    const downloadUrl = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  // Build URL with path params
  buildUrl(endpoint, params = {}) {
    let url = endpoint;
    Object.keys(params).forEach(key => {
      url = url.replace(`:${key}`, params[key]);
    });
    return url;
  }
}

const apiClient = new ApiClient();
export default apiClient;
