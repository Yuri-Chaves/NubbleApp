import React, { useState } from 'react';

import { Icon } from '../Icon/Icon';
import { TextInput, TextInputProps } from '../TextInput/TextInput';

export type PasswordInputProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEnter, setIsSecureTextEnter] = useState(true);
  return (
    <TextInput
      secureTextEntry={isSecureTextEnter}
      {...props}
      autoCapitalize="none"
      rightComponent={
        <Icon
          onPress={() => setIsSecureTextEnter((prev) => !prev)}
          name={isSecureTextEnter ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}
