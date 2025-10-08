import React from 'react';
import { Navigate } from 'react-router-dom';
import { tokenService } from '@services/auth/tokenService';

const ProtectedRoute = ({ children, requiredPermission }) => {
  const isAuthenticated = tokenService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // TODO: Add permission check logic when user data is available
  // if (requiredPermission && !hasPermission(requiredPermission)) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return children;
};

export default ProtectedRoute;
