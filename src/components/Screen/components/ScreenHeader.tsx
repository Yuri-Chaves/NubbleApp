import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Box, Icon, Text, TouchableBox } from '@components';

import { ScreenProps } from '../Screen';

type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'>;
const ICON_SIZE = 20;
export function ScreenHeader({ title, HeaderComponent, canGoBack }: Props) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between"
    >
      {canGoBack && (
        <TouchableBox
          testID="screen-back-button"
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center"
          mr="s10"
        >
          <Icon name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableBox>
      )}
      {HeaderComponent}
      {title && (
        <>
          <Text preset="headingSmall">{title}</Text>
          <Box width={ICON_SIZE} height={ICON_SIZE} />
        </>
      )}
    </Box>
  );
}
