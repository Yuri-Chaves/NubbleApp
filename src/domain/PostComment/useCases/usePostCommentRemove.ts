import { MutationOptions, QueryKeys } from '@infra';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCommentService } from '../PostCommentService';

export function usePostCommentRemove(
  postId: number,
  option?: MutationOptions<string>
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, { postCommentId: number }>({
    mutationFn: ({ postCommentId }) => postCommentService.remove(postCommentId),
    onSuccess: (message) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (option?.onSuccess) {
        option.onSuccess(message);
      }
    },
    onError: () => {
      if (option?.onError) {
        option.onError(option.errorMessage || '');
      }
    },
  });

  return {
    mutate: mutation.mutate,
  };
}
