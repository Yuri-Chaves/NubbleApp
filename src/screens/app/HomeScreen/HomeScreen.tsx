import React, { useRef } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  ViewStyle,
} from 'react-native';

import { Post, usePostList } from '@domain';
import { useScrollToTop } from '@react-navigation/native';
import { AppTabScreenProps } from '@routes';

import { PostItem, Screen } from '@components';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';

export function HomeScreen({
  navigation,
  route,
}: AppTabScreenProps<'HomeScreen'>) {
  const {
    isError,
    isLoading,
    list: postList,
    refresh,
    fetchNextPage,
  } = usePostList();

  const flatListRef = useRef<FlatList<Post>>(null);

  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={isLoading} error={isError} refetch={refresh} />
        }
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        refreshing={isLoading}
      />
    </Screen>
  );
}
const $screen: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
