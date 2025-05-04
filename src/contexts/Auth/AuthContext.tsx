import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthContextType, AuthProviderProps } from './AuthContext.types';

const defaultContext: AuthContextType = {
  accessToken: null,
  isAuthenticated: false,
};
const AuthContext = createContext<AuthContextType>(defaultContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken, isAuthenticated: !!accessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
