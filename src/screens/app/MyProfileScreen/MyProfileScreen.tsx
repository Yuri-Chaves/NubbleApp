import React from 'react';

import { AppTabScreenProps } from '@routes';
import { useAuthCredentials } from '@services';

import { Box, Icon, Screen, Text } from '@components';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  const { authCredentials } = useAuthCredentials();

  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {authCredentials && (
          <Text preset="headingMedium">{authCredentials.user.fullName}</Text>
        )}
        <Icon
          name="settings"
          onPress={() => navigation.navigate('SettingScreen')}
        />
      </Box>
    </Screen>
  );
}
