export const handleApiResponse = response => {
  if (response?.data) {
    return {
      success: true,
      data: response.data,
      message: response.message || 'Success',
    };
  }
  return {
    success: true,
    data: response,
    message: 'Success',
  };
};

export const extractPaginationData = response => {
  return {
    data: response?.data || [],
    pagination: {
      currentPage: response?.current_page || 1,
      totalPages: response?.last_page || 1,
      perPage: response?.per_page || 10,
      total: response?.total || 0,
      from: response?.from || 0,
      to: response?.to || 0,
    },
  };
};

export default handleApiResponse;
