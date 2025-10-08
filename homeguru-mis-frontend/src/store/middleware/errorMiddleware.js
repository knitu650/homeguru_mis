import { toast } from 'react-toastify';

const errorMiddleware = () => next => action => {
  // Check if action is rejected
  if (action.type.endsWith('/rejected')) {
    const error = action.payload || action.error;
    const errorMessage = error?.message || 'An error occurred';
    
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  // Check if action is fulfilled with success message
  if (action.type.endsWith('/fulfilled') && action.payload?.message) {
    toast.success(action.payload.message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  return next(action);
};

export default errorMiddleware;
