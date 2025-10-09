import React, { createContext, useContext, useState, useEffect } from 'react';
import { tokenService } from 'services/auth/tokenService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated on mount
    const checkAuth = async () => {
      if (tokenService.isAuthenticated()) {
        // TODO: Fetch user data from API
        setUser({
          id: 1,
          name: 'Admin User',
          email: 'admin@homeguru.com',
          role: 'admin',
        });
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    // TODO: Implement actual login API call
    const mockUser = {
      id: 1,
      name: 'Admin User',
      email: credentials.email,
      role: 'admin',
    };
    
    tokenService.setTokens('mock-access-token', 'mock-refresh-token');
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    tokenService.clearTokens();
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
