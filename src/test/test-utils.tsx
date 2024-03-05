import React, { ReactElement } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthCredentialsProvider } from '@services';
import { ThemeProvider } from '@shopify/restyle';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';
import { theme } from '@theme';

import { Toast } from '@components';

const queryClientConfig: QueryClientConfig = {
  //@ts-ignore
  logger: {
    log: console.log,
    warn: console.warn,
    // ✅ no more errors on the console for tests
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
      //@ts-ignore
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
      //@ts-ignore
      cacheTime: Infinity,
    },
  },
};

const wrapAllTheProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
const wrapScreenProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);
  return ({ children }: { children: React.ReactNode }) => (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>{children}</NavigationContainer>
          <Toast />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
};

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, { wrapper: wrapAllTheProviders(), ...options });
}

function customRenderScreen<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, { wrapper: wrapScreenProviders(), ...options });
}

function customRenderHook<Result, Props>(
  renderCallBack: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>
) {
  return renderHook(renderCallBack, {
    wrapper: wrapAllTheProviders(),
    ...options,
  });
}

export * from '@testing-library/react-native';
export { customRender as render };
export { customRenderHook as renderHook };
export { customRenderScreen as renderScreen };
