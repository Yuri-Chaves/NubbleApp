import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';

import { useAppTheme } from '@hooks';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { $textInputStyle } from '../TextInput/TextInput';

interface TextMessageProps extends TextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rNtextInput
}: TextMessageProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const sendIsDisabled = value?.trim().length === 0;

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPressIn={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12"
      >
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, { color: colors.gray1 }]}
          {...rNtextInput}
        />
        <Pressable
          testID="text-message-enviar"
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}
        >
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
