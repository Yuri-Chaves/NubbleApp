import React from 'react';

import { Post } from '@domain';

import { Box, Icon, IconProps, Text, TouchableBox } from '@components';

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {}
  function navigateToComments() {}
  function favoritePost() {}

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        marked
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        marked={false}
        onPress={likePost}
        text={commentCount}
      />
      <Item
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        marked={false}
        onPress={favoritePost}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  marked: boolean;
}
function Item({ icon, onPress, text, marked }: ItemProps) {
  return (
    <TouchableBox
      marginRight="s24"
      flexDirection="row"
      alignContent="center"
      onPress={onPress}
    >
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableBox>
  );
}
