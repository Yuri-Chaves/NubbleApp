import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';
import { useForm } from 'react-hook-form';

import { Button, FormTextInput, Screen, Text } from '@components';

import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from './ForgotPasswordSchema';

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const { reset } = useResetNavigationSuccess();
  const { control, formState, handleSubmit } =
    useForm<ForgotPasswordSchemaType>({
      resolver: zodResolver(ForgotPasswordSchema),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });
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
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{ mb: 's40' }}
      />
      <Button onPress={handleSubmit(submitForm)} title="Recuperar senha" />
    </Screen>
  );
}
