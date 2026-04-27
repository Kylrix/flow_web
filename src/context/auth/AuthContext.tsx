'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Models } from 'appwrite';
import { account } from '@/lib/appwrite/client';

interface AuthState {
  user: Models.User<Models.Preferences> | null;
  isLoading: boolean;
  isAuthenticating: boolean;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
  openLoginPopup: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getAuthUrl = () => 'https://accounts.kylrix.space/login';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loadUser = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadUser();
  }, []);

  const checkSession = async () => {
    await loadUser();
  };

  const openLoginPopup = async () => {
    if (typeof window === 'undefined' || isAuthenticating) return;
    setIsAuthenticating(true);
    window.location.assign(`${getAuthUrl()}?source=${encodeURIComponent(window.location.href)}`);
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
    } finally {
      setUser(null);
    }
  };

  const value = useMemo<AuthContextType>(() => ({
    user,
    isLoading,
    isAuthenticating,
    isAuthenticated: !!user,
    logout,
    checkSession,
    openLoginPopup,
  }), [user, isLoading, isAuthenticating]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
