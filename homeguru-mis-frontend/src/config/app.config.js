// Application Configuration
export const APP_CONFIG = {
  name: process.env.REACT_APP_NAME || 'HomeGuru MIS',
  version: process.env.REACT_APP_VERSION || '1.0.0',
  environment: process.env.REACT_APP_ENVIRONMENT || 'development',
  baseUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
  
  // Session
  sessionTimeout: parseInt(process.env.REACT_APP_SESSION_TIMEOUT) || 3600000, // 1 hour
  
  // Pagination
  defaultPageSize: parseInt(process.env.REACT_APP_DEFAULT_PAGE_SIZE) || 10,
  maxPageSize: parseInt(process.env.REACT_APP_MAX_PAGE_SIZE) || 100,
  pageSizeOptions: [10, 25, 50, 100],
  
  // File Upload
  maxFileSize: parseInt(process.env.REACT_APP_MAX_FILE_SIZE) || 5242880, // 5MB
  allowedFileTypes: process.env.REACT_APP_ALLOWED_FILE_TYPES?.split(',') || [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
  
  // Date Format
  dateFormat: 'dd/MM/yyyy',
  dateTimeFormat: 'dd/MM/yyyy HH:mm',
  timeFormat: 'HH:mm',
  
  // Currency
  currency: 'INR',
  currencySymbol: '₹',
  
  // Features
  features: {
    darkMode: true,
    multiLanguage: false,
    notifications: true,
    fileUpload: true,
    exportData: true,
    bulkOperations: true,
  },
};

export default APP_CONFIG;
