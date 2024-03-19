/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';

import { Router } from './src/routes/Router';
import { AuthCredentialsProvider } from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import { MMKVStorage } from './src/services/storage/implementation/MMKVStorage';
import { setStorage } from './src/services/storage/storage';

const queryClient = new QueryClient();

setStorage(MMKVStorage);

function App(): JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            {/* Only use ToastProvider if it is using Context implementation.
            Zustand implementation doesn't need a provider */}
            {/* <ToastProvider> */}
            <Toast />
            <Router />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
