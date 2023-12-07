/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Icon, Text} from '@components';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" color='carrotSecondary' style={{fontSize: 32}}>
          Hello Word!
        </Text>
        <Icon name='arrowLeft' />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
