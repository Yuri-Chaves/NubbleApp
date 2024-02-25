import { useDebounce } from '@hooks';
import { QueryKeys } from '@infra';
import { useQuery } from '@tanstack/react-query';

import { authService } from '../authService';

interface Param<T extends { length: number }> {
  value: T;
  enabled: boolean;
  queryKey: QueryKeys;
  isAvailableFc: (value: T) => Promise<boolean>;
}

function useAuthIsValueAvailable<T extends { length: number }>({
  value,
  enabled,
  isAvailableFc,
  queryKey,
}: Param<T>) {
  const debouncedValue = useDebounce(value, 1000);

  const { data, isFetching } = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailableFc(debouncedValue),
    retry: false,
    staleTime: 15000,
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebouncing = debouncedValue !== value;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}

type TIsUsernameAvailable = {
  username: string;
  enabled: boolean;
};

export function useAuthIsUsernameAvailable({
  username,
  enabled,
}: TIsUsernameAvailable) {
  return useAuthIsValueAvailable({
    enabled,
    value: username,
    isAvailableFc: authService.isUsernameAvailable,
    queryKey: QueryKeys.IsUsernameAvailable,
  });
}

type TIsEmailAvailable = {
  email: string;
  enabled: boolean;
};

export function useAuthIsEmailAvailable({ email, enabled }: TIsEmailAvailable) {
  return useAuthIsValueAvailable({
    enabled,
    value: email,
    isAvailableFc: authService.isEmailAvailable,
    queryKey: QueryKeys.IsEmailAvailable,
  });
}
