import { MutationOptions, QueryKeys } from '@infra';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
  const queryClient = useQueryClient();

  const { mutate, isError, isIdle } = useMutation<
    PostComment,
    unknown,
    { message: string }
  >({
    mutationFn: ({ message }) => postCommentService.create(postId, message),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'ocorreu um erro');
      }
    },
  });

  async function createComment(message: string) {
    await mutate({ message });
  }

  return {
    loading: isIdle,
    isError,
    createComment,
  };
}
