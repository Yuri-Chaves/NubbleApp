import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import { usePostCommentCreate } from '@domain';

import { TextMessage } from '@components';

interface Props {
  postId: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({ postId, onAddComment }: Props) {
  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: () => {
      onAddComment();
      Keyboard.dismiss();
      setMessage('');
    },
  });
  const [message, setMessage] = useState('');

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={createComment}
      value={message}
      onChangeText={setMessage}
    />
  );
}
