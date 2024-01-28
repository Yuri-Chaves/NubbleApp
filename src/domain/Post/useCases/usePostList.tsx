import { useEffect, useState } from 'react';

import { postService } from '../postService';
import { Post } from '../postTypes';

export function usePostList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const { data, meta } = await postService.getList(1);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return;
    }
    try {
      setError(null);
      setLoading(true);
      const { data, meta } = await postService.getList(page);
      setPostList((prev) => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage((prev) => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
