import React from 'react';

import { useAuthSignOut } from '@domain';
import { AppScreenProps } from '@routes';

import { Button, Screen, Text } from '@components';

export function SettingsScreen({}: AppScreenProps<'SettingScreen'>) {
  const { isLoading, signOut } = useAuthSignOut();
  return (
    <Screen canGoBack title="Configurações">
      <Text>Setting Screen</Text>
      <Button title="Sair da conta" onPress={signOut} loading={isLoading} />
    </Screen>
  );
}
