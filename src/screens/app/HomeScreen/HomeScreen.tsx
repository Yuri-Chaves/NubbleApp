import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  ViewStyle,
} from 'react-native';

import { Post, postService } from '@domain';
import { AppScreenProps, AppTabScreenProps } from '@routes';

import { Box, Button, PostItem, Screen, Text } from '@components';

import { HomeHeader } from './components/HomeHeader';

export function HomeScreen({
  navigation,
  route,
}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then((list) => {
      setPostList(list);
    });
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }
  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  );
}
const $screen: ViewStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
