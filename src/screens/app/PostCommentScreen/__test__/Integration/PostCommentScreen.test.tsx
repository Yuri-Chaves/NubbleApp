import React from 'react';
import { Alert, AlertButton } from 'react-native';

import { authCredentialsStorage } from '@services';
import { mockedPostComment, resetInMemoryResponse, server } from '@test';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'test-utils';

import { PostCommentScreen } from '../../PostCommentScreen';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});
afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});
afterAll(() => {
  server.close();
  jest.clearAllMocks();
  jest.useRealTimers();
});

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />
    );

    const comment = screen.findByText(/Some Comment/i);

    expect(comment).toBeTruthy();

    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    fireEvent.changeText(inputText, 'new comment');

    fireEvent.press(screen.getByTestId('text-message-enviar'));

    const newComment = await screen.findByText(/new comment/i);

    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(3);
  });
  test('when DELETING a comment, the list is automatically updated and a toast message is displayed', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.aparecidoAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />
    );
    const comment = await screen.findByText(
      mockedPostComment.aparecidoPostCommentAPI.message,
      { exact: false }
    );

    expect(comment).toBeTruthy();

    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();

    mockedConfirm && mockedConfirm();

    await waitForElementToBeRemoved(() =>
      screen.getByText(mockedPostComment.aparecidoPostCommentAPI.message, {
        exact: false,
      })
    );

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(1);

    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy()
    );

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
