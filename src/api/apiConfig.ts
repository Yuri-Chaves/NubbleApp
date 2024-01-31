import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
  headers: {
    Authorization:
      'Bearer Mg.hYPjlq6GYTf8nmN92G6W7JaCVrhNsyLfQTheaFWvvXP8NED_s6VsF9KkEPxa',
  },
});
