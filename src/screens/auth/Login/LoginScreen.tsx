import React from 'react';
import { Alert } from 'react-native';

import { useAuthSignIn } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthScreenProps } from '@routes';
import { useToastService } from '@services';
import { useForm } from 'react-hook-form';

import { Box, Button, FormTextInput, Screen, Text } from '@components';

import { LoginSchema, LoginSchemaType } from './LoginSchema';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const { showToast } = useToastService();
  const { isLoading, signIn } = useAuthSignIn({
    onError: (message) => showToast({ message, type: 'error' }),
  });
  const { control, formState, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginSchemaType) {
    signIn({ email, password });
  }
  return (
    <Screen>
      <Box paddingHorizontal="s24">
        <Text mb="s8" preset="headingLarge">
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mai e senha para entrar
        </Text>
        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{ mb: 's20' }}
        />
        <FormTextInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{
            mb: 's10',
          }}
        />
        <Text
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
          color="primary"
          preset="paragraphSmall"
          bold
        >
          Esqueci minha senha
        </Text>
        <Button
          title="Entrar"
          loading={isLoading}
          mt="s48"
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
        <Button
          onPress={() => navigation.navigate('SignUpScreen')}
          title="Criar conta"
          mt="s12"
          presset="outline"
        />
      </Box>
    </Screen>
  );
}
