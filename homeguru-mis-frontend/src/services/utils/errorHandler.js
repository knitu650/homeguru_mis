export const handleApiError = error => {
  if (error.response) {
    // Server responded with error
    const { status, data } = error.response;
    
    switch (status) {
      case 400:
        return data?.message || 'Bad request';
      case 401:
        return 'Unauthorized. Please login again.';
      case 403:
        return 'You do not have permission to perform this action.';
      case 404:
        return 'Resource not found.';
      case 422:
        return data?.message || 'Validation error.';
      case 500:
        return 'Server error. Please try again later.';
      default:
        return data?.message || 'An error occurred.';
    }
  } else if (error.request) {
    // Request made but no response
    return 'No response from server. Please check your connection.';
  } else {
    // Error in request setup
    return error.message || 'An error occurred.';
  }
};

export const handleFormErrors = error => {
  if (error.response?.data?.errors) {
    return error.response.data.errors;
  }
  return {};
};

export default handleApiError;
