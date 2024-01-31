import { postCommentService } from '@domain';
import { usePaginatedList } from '@infra';

export function usePostCommentList(post_id: number) {
  function getList(page: number) {
    return postCommentService.getList(post_id, page);
  }
  return usePaginatedList(getList);
}
