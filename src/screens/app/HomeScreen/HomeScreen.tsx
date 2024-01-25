import React from 'react';

import { AppScreenProps, AppTabScreenProps } from '@routes';

import { Button, Screen, Text } from '@components';

export function HomeScreen({
  navigation,
  route,
}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>Home</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingScreen')}
      />
    </Screen>
  );
}
