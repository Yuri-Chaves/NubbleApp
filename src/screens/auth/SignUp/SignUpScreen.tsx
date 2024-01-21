import {
  Button,
  FormPasswordInput,
  FormTextInput,
  PasswordInput,
  Screen,
  Text,
  TextInput,
} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StackParamList} from '@routes';
import {useResetNavigationSuccess} from '@hooks';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {SignUpSchemaType, SignUpSchema} from './SignUpSchema';

type ScreenProps = NativeStackScreenProps<StackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      userName: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    // TODO:
    reset({
      title: 'Sua conta foi criada com sucesso',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'greenSuccess',
      },
    });
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
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button
        disabled={!formState.isValid}
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
