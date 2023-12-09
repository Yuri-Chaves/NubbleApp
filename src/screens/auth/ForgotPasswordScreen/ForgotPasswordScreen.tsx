import {Button, Screen, Text, TextInput} from '@components';
import React from 'react';
import {StackParamList} from '@routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '@hooks';

type ScreenProps = NativeStackScreenProps<
  StackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    // TODO:
    reset({
      title: 'E-mail de recuperação enviado!',
      description: 'Clique no link no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'greenPrimary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}
