/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import {LoginScreen} from 'src/screens/auth/Login/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
