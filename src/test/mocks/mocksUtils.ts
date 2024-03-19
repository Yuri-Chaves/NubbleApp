import { AuthCredentials, UserAPI, userAdapter } from '@domain';

const mateusUserApi: UserAPI = {
  id: 7,
  first_name: 'Mateus',
  last_name: 'de Souza',
  username: 'mateussouza',
  email: 'msouza@coffstack.com',
  profile_url: 'fake-url',
  is_online: false,
  full_name: 'Mateus de Souza',
};

export const mateusAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2030-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(mateusUserApi),
};

export const mockUtils = {
  mateusUserApi,
  mateusAuthCredentials,
};
