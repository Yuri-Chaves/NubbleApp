import { useAuthIsEmailAvailable, useAuthIsUsernameAvailable } from '@domain';
import { UseFormWatch, UseFormGetFieldState } from 'react-hook-form';

import { SignUpSchemaType } from './SignUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchemaType>;
  getFieldState: UseFormGetFieldState<SignUpSchemaType>;
};

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

export function useAsyncValidation({ getFieldState, watch }: Props): {
  usernameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const username = watch('userName');
  const userNameState = getFieldState('userName');
  const userNameIsValid = !userNameState.invalid && userNameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: userNameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;
  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: usernameQuery.isUnavailable
        ? 'username indisponível'
        : undefined,
      isFetching: usernameQuery.isFetching,
      notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable ? 'email indisponível' : undefined,
      isFetching: emailQuery.isFetching,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
    },
  };
}
