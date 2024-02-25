import React from 'react';

import { useAuthSignUp } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps, AuthStackParamList } from '@routes';
import { useForm } from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';

import { SignUpSchemaType, SignUpSchema } from './SignUpSchema';
import { useAsyncValidation } from './useAsyncValidation';

const resetParams: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'greenSuccess',
  },
};

const defaultValues: SignUpSchemaType = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  userName: '',
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const { reset } = useResetNavigationSuccess();
  const { SignUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset(resetParams);
    },
  });

  const { control, formState, handleSubmit, watch, getFieldState } =
    useForm<SignUpSchemaType>({
      resolver: zodResolver(SignUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  const userValidation = useAsyncValidation({ watch, getFieldState });

  function submitForm(formValues: SignUpSchemaType) {
    SignUp(formValues);
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="userName"
        label="Seu username"
        placeholder="@"
        errorMessage={userValidation.usernameValidation.errorMessage}
        boxProps={{ mb: 's20' }}
        rightComponent={
          userValidation.usernameValidation.isFetching ? (
            <ActivityIndicator color="primary" size="small" />
          ) : undefined
        }
      />
      <FormTextInput
        control={control}
        name="firstName"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{ mb: 's20' }}
        autoCapitalize="words"
      />
      <FormTextInput
        control={control}
        name="lastName"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{ mb: 's20' }}
        autoCapitalize="words"
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
        errorMessage={userValidation.emailValidation.errorMessage}
        rightComponent={
          userValidation.emailValidation.isFetching ? (
            <ActivityIndicator color="primary" size="small" />
          ) : undefined
        }
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />
      <Button
        loading={isLoading}
        disabled={
          !formState.isValid ||
          userValidation.usernameValidation.notReady ||
          userValidation.emailValidation.notReady
        }
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
