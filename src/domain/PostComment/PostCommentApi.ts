import { PageApi, PageParams, api } from '@api';

import { PostCommentAPI } from './PostCommentTypes';

export const POST_COMMENT_PATH = '/user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PageParams
): Promise<PageApi<PostCommentAPI>> {
  // await new Promise((resolve) => setTimeout(() => resolve(''), 2000));
  let response = await api.get<PageApi<PostCommentAPI>>(POST_COMMENT_PATH, {
    params: {
      post_id,
      ...pageParams,
    },
  });
  return response.data;
}

async function create(
  post_id: number,
  message: string
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(POST_COMMENT_PATH, {
    post_id,
    message,
  });
  return response.data;
}

async function remove(postCommentId: number): Promise<{ message: string }> {
  const response = await api.delete<{ message: string }>(
    `${POST_COMMENT_PATH}/${postCommentId}`
  );
  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove,
};
