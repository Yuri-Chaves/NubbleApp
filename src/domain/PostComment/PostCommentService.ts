import { apiAdapter } from '@api';
import { Page } from '@types';

import { postCommentAdapter } from './PostCommentAdapter';
import { postCommentApi } from './PostCommentApi';
import { PostComment } from './PostCommentTypes';

const PER_PAGE = 10;
async function getList(
  postId: number,
  page: number
): Promise<Page<PostComment>> {
  const postCommentPageApi = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });
  // throw new Error('Error');
  // return [];
  return {
    data: postCommentPageApi.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageApi.meta),
  };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);
  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);
  return response.message;
}

/**
 * @description user can delete comment if is the post or comment author
 *
 * @param postComment the comment to be deleted
 *
 * @param userId the current session user id
 *
 * @param postAuthorId the post author id
 */
function isAllowToDelete(
  postComment: PostComment,
  userId: number,
  postAuthorId: number
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }
  if (postAuthorId === userId) {
    return true;
  }
  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
