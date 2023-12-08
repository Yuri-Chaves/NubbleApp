import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

type PasswordInputProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEnter, setIsSecureTextEnter] = useState(true);
  return (
    <TextInput
      secureTextEntry={isSecureTextEnter}
      {...props}
      rightComponent={
        <Icon
          onPress={() => setIsSecureTextEnter(prev => !prev)}
          name={isSecureTextEnter ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
    />
  );
}
