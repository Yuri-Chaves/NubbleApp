/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{fontSize: 32, color: 'red'}}>
        Hello Word!
      </Text>
    </SafeAreaView>
  );
}

export default App;
