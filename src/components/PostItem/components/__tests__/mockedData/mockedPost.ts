import { Post } from '@domain';

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 9,
  reactionCount: 7,
  text: 'This is the text (post description)',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'https://example.com',
    userName: 'maria julia',
  },
};
