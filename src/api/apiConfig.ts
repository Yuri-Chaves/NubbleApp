import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
  headers: {
    Authorization:
      'Bearer NA.SqzL7EuymBX28ullbnLMr-hkoQIXWWnFYO9cSKXKRSFlLluWYd7uWG9LiR6V',
  },
});
