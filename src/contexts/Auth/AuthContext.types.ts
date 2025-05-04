import type { ReactNode } from 'react';

interface AuthContextType {
  accessToken: string | null;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export type { AuthContextType, AuthProviderProps };
