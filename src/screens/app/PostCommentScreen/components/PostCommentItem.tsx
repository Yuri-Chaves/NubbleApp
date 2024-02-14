import React from 'react';
import { Alert, Pressable } from 'react-native';

import { PostComment, postCommentService, usePostCommentRemove } from '@domain';
import { useToastService } from '@services';

import { Box, ProfileAvatar, Text } from '@components';

interface Props {
  postComment: PostComment;
  onRemoveComment: () => void;
  useId: number;
  postAuthorId: number;
}

export function PostCommentItem({
  postComment,
  onRemoveComment,
  useId,
  postAuthorId,
}: Props) {
  const { showToast } = useToastService();
  const { mutate } = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({
        message: 'Comentário deletado',
      });
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    useId,
    postAuthorId
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário', '', [
      {
        text: 'Confirmar',
        onPress: () => mutate({ postCommentId: postComment.id }),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageUrl={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
