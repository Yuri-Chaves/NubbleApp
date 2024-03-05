import { AuthCredentials, authService } from '@domain';
import axios from 'axios';

export const BASE_URL = 'http://10.0.2.2:3333';
export const api = axios.create({
  baseURL: BASE_URL,
});

interface InterceptorProps {
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  authCredentials: AuthCredentials | null;
}
export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    (response) => response,
    async (responseError) => {
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);
      const status = responseError.response.status;
      console.log({ status });
      if (status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken
        );

        saveCredentials(newAuthCredentials);
        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        failedRequest.sent = true;

        return api(failedRequest);
      }

      return Promise.reject(responseError);
    }
  );

  return () => api.interceptors.response.eject(interceptor);
}
