import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Box, Icon, Text, ThouchableBox } from '@components';

import { ScreenProps } from '../Screen';

type Props = Pick<ScreenProps, 'title'>;
const ICON_SIZE = 20;
export function ScreenHeader({ title }: Props) {
  const navigation = useNavigation();
  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between"
    >
      <ThouchableBox
        onPress={navigation.goBack}
        flexDirection="row"
        alignItems="center"
      >
        <Icon name="arrowLeft" color="primary" />
        {!title && (
          <Text preset="paragraphMedium" semiBold ml="s8">
            Voltar
          </Text>
        )}
      </ThouchableBox>
      {title && (
        <>
          <Text preset="headingSmall">{title}</Text>
          <Box width={ICON_SIZE} height={ICON_SIZE} />
        </>
      )}
    </Box>
  );
}
