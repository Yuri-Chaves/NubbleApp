import { PageApi, PageParams, api } from '@api';
import { AxiosError } from 'axios';

import { PostAPI } from './postTypes';

async function getList(params?: PageParams): Promise<PageApi<PostAPI>> {
  // await new Promise((resolve) => setTimeout(() => resolve(''), 2000));
  let response = await api.get<PageApi<PostAPI>>('/user/post', { params });
  return response.data;
}

export const postApi = {
  getList,
};
