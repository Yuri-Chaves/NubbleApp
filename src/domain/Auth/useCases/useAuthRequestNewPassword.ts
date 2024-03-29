import { MutationOptions } from '@infra';
import { useMutation } from '@tanstack/react-query';

import { authService } from '../authService';

export function useAuthRequestNewPassword(options?: MutationOptions<string>) {
  const { mutate, isPending } = useMutation<string, Error, string>({
    mutationFn: (email) => authService.requestNewPassword(email),
    retry: false,
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: (message) => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
  });

  return {
    requestPassword: (email: string) => mutate(email),
    isLoading: isPending,
  };
}
