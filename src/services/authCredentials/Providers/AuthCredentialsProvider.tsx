import React, { useEffect } from 'react';
import { PropsWithChildren, createContext, useState } from 'react';

import { registerInterceptor } from '@api';
import { AuthCredentials, authService } from '@domain';

import { authCredentialsStorage } from '../authCredentialsStorage';
import { AuthCredentialsService } from '../authCredentialsType';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  userId: null,
  isLoading: true,
  removeCredentials: async () => {},
  saveCredentials: async () => {},
});

export function AuthCredentialsProvider({ children }: PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function initializeAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  useEffect(() => {
    initializeAuthCredentials();
  }, []);

  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      removeCredentials,
      saveCredentials,
    });

    return interceptor;
  }, [authCredentials]);

  const userId = authCredentials?.user.id || null;

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        userId,
        isLoading,
        removeCredentials,
        saveCredentials,
      }}
    >
      {children}
    </AuthCredentialsContext.Provider>
  );
}
