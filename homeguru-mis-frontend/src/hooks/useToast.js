import { toast } from 'react-toastify';

const useToast = () => {
  const showToast = (message, options = {}) => {
    const defaultOptions = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    };

    return toast(message, defaultOptions);
  };

  const success = (message, options = {}) => {
    return toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      ...options,
    });
  };

  const error = (message, options = {}) => {
    return toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      ...options,
    });
  };

  const warning = (message, options = {}) => {
    return toast.warning(message, {
      position: 'top-right',
      autoClose: 4000,
      ...options,
    });
  };

  const info = (message, options = {}) => {
    return toast.info(message, {
      position: 'top-right',
      autoClose: 3000,
      ...options,
    });
  };

  const promise = (promise, messages = {}) => {
    const defaultMessages = {
      pending: 'Processing...',
      success: 'Success!',
      error: 'Something went wrong',
      ...messages,
    };

    return toast.promise(promise, defaultMessages);
  };

  const dismiss = toastId => {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      toast.dismiss();
    }
  };

  const loading = (message = 'Loading...', options = {}) => {
    return toast.loading(message, {
      position: 'top-right',
      ...options,
    });
  };

  const update = (toastId, options = {}) => {
    toast.update(toastId, options);
  };

  return {
    show: showToast,
    success,
    error,
    warning,
    info,
    promise,
    dismiss,
    loading,
    update,
  };
};

export default useToast;
