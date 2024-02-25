import { MMKV } from 'react-native-mmkv';

import { Storage } from '../storage';

const storage = new MMKV();

export const MMKVStorage: Storage = {
  getItem: (key) => {
    const item = storage.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => storage.set(key, JSON.stringify(value)),
  removeItem: async (key) => storage.delete(key),
};
