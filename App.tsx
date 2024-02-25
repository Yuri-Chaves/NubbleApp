/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  AuthCredentialsProvider,
  MMKVStorage,
  ToastProvider,
  setStorage,
} from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';

import { Router } from './src/routes/Router';

const queryClient = new QueryClient();

setStorage(MMKVStorage);

function App(): JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <Toast />
              <Router />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
