import React, { ReactElement } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';
import { theme } from '@theme';

export const wrapperAllTheProviders = () => {
  const queryClient = new QueryClient({
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
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, { wrapper: wrapperAllTheProviders(), ...options });
}

function customRenderHook<Result, Props>(
  renderCallBack: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>
) {
  return renderHook(renderCallBack, {
    wrapper: wrapperAllTheProviders(),
    ...options,
  });
}

export * from '@testing-library/react-native';
export { customRender as render };
export { customRenderHook as renderHook };
