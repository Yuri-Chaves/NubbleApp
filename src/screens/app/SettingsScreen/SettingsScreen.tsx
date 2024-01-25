import React from 'react';

import { AppScreenProps } from '@routes';

import { Screen, Text } from '@components';

export function SettingsScreen({}: AppScreenProps<'SettingScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Setting Screen</Text>
    </Screen>
  );
}
