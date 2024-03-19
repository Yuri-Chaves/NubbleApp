import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useAppSafeArea, useAppTheme } from '@hooks';

import { Box, BoxProps } from '../Box/Box';

import { ScrollViewContainer, ViewContainer, ScreenHeader } from './components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  children,
  HeaderComponent,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          {canGoBack && (
            <ScreenHeader
              HeaderComponent={HeaderComponent}
              title={title}
              canGoBack={canGoBack}
            />
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
