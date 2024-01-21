import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import { useAppTheme } from '@hooks';

import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}
export function TextInput({
  label,
  errorMessage,
  rightComponent,
  boxProps,
  ...rNTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const { colors } = useAppTheme();
  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    flexDirection: 'row',
  };
  return (
    <Box {...boxProps}>
      <Pressable onPress={() => inputRef.current?.focus()}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            autoCapitalize="none"
            {...rNTextInputProps}
          />
          {rightComponent && (
            <Box ml="s16" justifyContent="center">
              {rightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}
const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
