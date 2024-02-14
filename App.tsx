/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { ToastProvider } from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';

import { Router } from './src/routes/Router';
import { LoginScreen } from './src/screens/auth/Login/LoginScreen';
import { SignUpScreen } from './src/screens/auth/SignUp/SignUpScreen';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Toast />
          <Router />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
