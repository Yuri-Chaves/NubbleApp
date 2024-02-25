import React from 'react';

import { useAuthRequestNewPassword } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps, AuthStackParamList } from '@routes';
import { useToastService } from '@services';
import { useForm } from 'react-hook-form';

import { Button, FormTextInput, Screen, Text } from '@components';

import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from './ForgotPasswordSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'E-mail de recuperação enviado!',
  description: 'Clique no link no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'greenPrimary',
  },
};

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const { reset } = useResetNavigationSuccess();

  const { showToast } = useToastService();

  const { isLoading, requestPassword } = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParam),
    onError: (error) => showToast({ message: error, type: 'error' }),
  });

  const { control, formState, handleSubmit } =
    useForm<ForgotPasswordSchemaType>({
      resolver: zodResolver(ForgotPasswordSchema),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });

  function submitForm(values: ForgotPasswordSchemaType) {
    requestPassword(values.email);
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
      <Button
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
