import { useMemo } from 'react';
import { useAuth } from '@context/AuthContext';
import { PERMISSIONS, ROLE_PERMISSIONS } from '@config/permissions.config';

const usePermission = () => {
  const { user } = useAuth();

  // Get user's permissions based on role
  const userPermissions = useMemo(() => {
    if (!user || !user.role) {
      return [];
    }

    // Get permissions from role configuration
    const rolePerms = ROLE_PERMISSIONS[user.role] || [];

    // Merge with any additional user-specific permissions
    const additionalPerms = user.permissions || [];

    return [...new Set([...rolePerms, ...additionalPerms])];
  }, [user]);

  // Check if user has a specific permission
  const hasPermission = permission => {
    if (!user) return false;

    // Super admin has all permissions
    if (user.role === 'super_admin') return true;

    return userPermissions.includes(permission);
  };

  // Check if user has all of the specified permissions
  const hasAllPermissions = permissions => {
    if (!Array.isArray(permissions)) return false;
    return permissions.every(permission => hasPermission(permission));
  };

  // Check if user has any of the specified permissions
  const hasAnyPermission = permissions => {
    if (!Array.isArray(permissions)) return false;
    return permissions.some(permission => hasPermission(permission));
  };

  // Check if user has a specific role
  const hasRole = role => {
    if (!user) return false;
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    return user.role === role;
  };

  // Check if user has any of the specified roles
  const hasAnyRole = roles => {
    if (!user || !Array.isArray(roles)) return false;
    return roles.includes(user.role);
  };

  // Check if user has all of the specified roles (rare use case)
  const hasAllRoles = roles => {
    if (!user || !Array.isArray(roles)) return false;
    // Since a user typically has one role, this checks if the user's role is in the array
    return roles.length === 1 && roles.includes(user.role);
  };

  // Check if user can access a resource
  const canAccess = (resource, action = 'view') => {
    const permission = `${resource}.${action}`;
    return hasPermission(permission);
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  // Check if user is admin or super admin
  const isAdmin = useMemo(() => {
    return user && ['admin', 'super_admin'].includes(user.role);
  }, [user]);

  // Check if user is super admin
  const isSuperAdmin = useMemo(() => {
    return user && user.role === 'super_admin';
  }, [user]);

  return {
    // Permission checks
    hasPermission,
    hasAllPermissions,
    hasAnyPermission,
    
    // Role checks
    hasRole,
    hasAnyRole,
    hasAllRoles,
    
    // Resource access
    canAccess,
    
    // User info
    userPermissions,
    isAuthenticated,
    isAdmin,
    isSuperAdmin,
    currentUser: user,
    
    // Constants
    PERMISSIONS,
  };
};

export default usePermission;
