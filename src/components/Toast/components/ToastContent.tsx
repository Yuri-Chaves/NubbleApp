/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions } from 'react-native';

import { Toast, ToastType } from '@services';
import { $shadowProps } from '@theme';

import { Box, BoxProps, Icon, IconProps, Text } from '@components';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({ toast }: Props) {
  const type: ToastType = toast?.type || 'success';

  return (
    <Box top={100} {...$Box} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{ flexShrink: 1 }} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};

const $Box: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
