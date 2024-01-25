import React from 'react';

import { AppTabScreenProps } from '@routes';

import { Screen, Text } from '@components';

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text>My Profile</Text>
    </Screen>
  );
}
