import { useState, useCallback } from 'react';
import apiClient from '@services/api/apiClient';
import { APP_CONFIG } from '@config/app.config';

const useFileUpload = (options = {}) => {
  const {
    url = '/upload/single',
    maxSize = APP_CONFIG.maxFileSize,
    allowedTypes = APP_CONFIG.allowedFileTypes,
    multiple = false,
    autoUpload = false,
  } = options;

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Validate file
  const validateFile = useCallback(
    (file) => {
      const errors = [];

      // Check file size
      if (file.size > maxSize) {
        errors.push(`File size exceeds ${maxSize / (1024 * 1024)}MB`);
      }

      // Check file type
      if (allowedTypes && allowedTypes.length > 0) {
        const isAllowed = allowedTypes.some(type => {
          if (type.includes('*')) {
            const [category] = type.split('/');
            return file.type.startsWith(category);
          }
          return file.type === type;
        });

        if (!isAllowed) {
          errors.push(`File type ${file.type} is not allowed`);
        }
      }

      return errors;
    },
    [maxSize, allowedTypes]
  );

  // Handle file selection
  const handleFileSelect = useCallback(
    (selectedFiles) => {
      const fileArray = Array.from(selectedFiles);
      const validatedFiles = [];
      const errors = [];

      fileArray.forEach(file => {
        const fileErrors = validateFile(file);
        if (fileErrors.length > 0) {
          errors.push({ file: file.name, errors: fileErrors });
        } else {
          validatedFiles.push({
            file,
            preview: file.type.startsWith('image/') 
              ? URL.createObjectURL(file) 
              : null,
            name: file.name,
            size: file.size,
            type: file.type,
          });
        }
      });

      if (errors.length > 0) {
        setError(errors);
        return false;
      }

      setError(null);
      setFiles(multiple ? [...files, ...validatedFiles] : validatedFiles);

      // Auto upload if enabled
      if (autoUpload) {
        uploadFiles(validatedFiles);
      }

      return true;
    },
    [files, multiple, autoUpload, validateFile]
  );

  // Upload files
  const uploadFiles = useCallback(
    async (filesToUpload = files) => {
      if (filesToUpload.length === 0) return;

      setUploading(true);
      setError(null);
      setUploadProgress(0);

      try {
        const uploadPromises = filesToUpload.map(async ({ file }) => {
          const formData = new FormData();
          formData.append('file', file);

          const response = await apiClient.upload(url, file, (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          });

          return response;
        });

        const results = await Promise.all(uploadPromises);
        setUploadedFiles(prev => [...prev, ...results]);
        setFiles([]);
        setUploadProgress(100);

        return results;
      } catch (err) {
        setError(err.message || 'Upload failed');
        throw err;
      } finally {
        setUploading(false);
      }
    },
    [files, url]
  );

  // Remove file from list
  const removeFile = useCallback(
    (index) => {
      setFiles(prev => {
        const newFiles = [...prev];
        // Revoke object URL if it exists
        if (newFiles[index].preview) {
          URL.revokeObjectURL(newFiles[index].preview);
        }
        newFiles.splice(index, 1);
        return newFiles;
      });
    },
    []
  );

  // Clear all files
  const clearFiles = useCallback(() => {
    files.forEach(({ preview }) => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    });
    setFiles([]);
    setError(null);
    setUploadProgress(0);
  }, [files]);

  // Clear uploaded files
  const clearUploadedFiles = useCallback(() => {
    setUploadedFiles([]);
  }, []);

  // Reset all
  const reset = useCallback(() => {
    clearFiles();
    clearUploadedFiles();
  }, [clearFiles, clearUploadedFiles]);

  // Get input props
  const getInputProps = useCallback(
    () => ({
      type: 'file',
      multiple,
      accept: allowedTypes?.join(','),
      onChange: (e) => handleFileSelect(e.target.files),
    }),
    [multiple, allowedTypes, handleFileSelect]
  );

  // Get drop zone props
  const getDropZoneProps = useCallback(
    () => ({
      onDrop: (e) => {
        e.preventDefault();
        handleFileSelect(e.dataTransfer.files);
      },
      onDragOver: (e) => {
        e.preventDefault();
      },
    }),
    [handleFileSelect]
  );

  return {
    files,
    uploading,
    uploadProgress,
    error,
    uploadedFiles,
    handleFileSelect,
    uploadFiles,
    removeFile,
    clearFiles,
    clearUploadedFiles,
    reset,
    getInputProps,
    getDropZoneProps,
  };
};

export default useFileUpload;
