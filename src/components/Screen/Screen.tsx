import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { useAppSafeArea, useAppTheme } from '@hooks';
import { useNavigation } from '@react-navigation/native';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{ paddingTop: top, paddingBottom: bottom }}
        >
          {canGoBack && (
            <Box mb="s24" flexDirection="row">
              <Icon
                onPress={navigation.goBack}
                name="arrowLeft"
                color="primary"
              />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
