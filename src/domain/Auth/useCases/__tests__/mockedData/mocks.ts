import { AuthCredentials } from '../../../authTypes';

export const mockedAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2025-03-03T17:05:00.433+00:00',
  refreshToken: 'refresh-token',
  user: {
    id: 1,
    firstName: 'Maria',
    lastName: 'Julia',
    userName: 'mariajulia',
    email: 'mariajulia@coffstack.com',
    profileUrl: 'fake-url',
    isOnline: false,
    fullName: 'Maria Julia',
  },
};
