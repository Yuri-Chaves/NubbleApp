import { postCommentService } from '@domain';
import { QueryKeys, usePaginatedList } from '@infra';

export function usePostCommentList(post_id: number) {
  function getList(page: number) {
    return postCommentService.getList(post_id, page);
  }
  return usePaginatedList([QueryKeys.PostCommentList, post_id], getList);
}
