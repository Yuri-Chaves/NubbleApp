import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Text, ThouchableBox, TouchableHighlightProps } from '@components';

import { buttonPressets } from './buttonPressets';

interface ButtonProps extends TouchableHighlightProps {
  title: string;
  loading?: boolean;
  presset?: ButtonPresset;
  disabled?: boolean;
}

export type ButtonPresset = 'primary' | 'outline';

export function Button({
  title,
  loading,
  presset = 'primary',
  disabled,
  ...touchableHighlightProps
}: ButtonProps) {
  const buttonPresset =
    buttonPressets[presset][disabled ? 'disabled' : 'default'];
  return (
    <ThouchableBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPresset.container}
      {...touchableHighlightProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonPresset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPresset.content}>
          {title}
        </Text>
      )}
    </ThouchableBox>
  );
}
