import {Box, Button, Icon, Screen, Text, TextInput} from '@components';
import React from 'react';

export function LoginScreen() {
  return (
    <Screen>
      <Box paddingHorizontal="s24">
        <Text mb="s8" preset="headingLarge">
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mai e senha para entrar
        </Text>
        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's20'}}
        />
        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          rightComponent={<Icon color="gray2" name="eyeOff" />}
          boxProps={{
            mb: 's10',
          }}
        />
        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>
        <Button title="Entrar" mt="s48" />
        <Button title="Criar conta" mt="s12" presset="outline" />
      </Box>
    </Screen>
  );
}
