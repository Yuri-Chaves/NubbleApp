import { useState } from 'react';

import { MutationOptions, useMutation } from '@infra';

import { postCommentService } from '../PostCommentService';
import { PostComment } from '../PostCommentTypes';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>
) {
  const { mutate, error, loading } = useMutation<
    { message: string },
    PostComment
  >(({ message }) => postCommentService.create(postId, message), options);

  async function createComment(message: string) {
    await mutate({ message });
  }

  return {
    loading,
    error,
    createComment,
  };
}
