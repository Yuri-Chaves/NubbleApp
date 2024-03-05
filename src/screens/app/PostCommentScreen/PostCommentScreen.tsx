import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList } from '@domain';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';
import { useAuthCredentials } from '@services';

import { Box, Screen } from '@components';

import {
  PostCommentItem,
  PostCommentBottom,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const { userId } = useAuthCredentials();

  const { bottom } = useAppSafeArea();
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;
  const { list, fetchNextPage, hasNextPage } = usePostCommentList(postId);

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        useId={userId}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
          contentContainerStyle={{ paddingBottom: bottom + 12 }}
        />
        <PostCommentTextMessage postId={route.params.postId} />
      </Box>
    </Screen>
  );
}
