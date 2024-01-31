import React from 'react';
import { Image } from 'react-native';

import { Post } from '@domain';

import { Box, ProfileAvatar, Text } from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({ author }: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageUrl={author.profileURL} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  );
}
