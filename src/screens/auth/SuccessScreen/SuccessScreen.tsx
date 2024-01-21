import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '@routes';

import { Button, Icon, Screen, Text } from '@components';

type ScreenProps = NativeStackScreenProps<StackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route, navigation }: ScreenProps) {
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={navigation.goBack} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
