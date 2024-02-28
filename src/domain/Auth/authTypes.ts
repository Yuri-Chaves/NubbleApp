import { User, UserAPI } from '../User';

export interface AuthCredentials {
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string;
    token: string;
    tokenExpires_at: string;
    refreshToken: string;
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ForgotPasswordParam {
  email: string;
}
