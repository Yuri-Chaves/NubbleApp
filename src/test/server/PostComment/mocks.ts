import { PageApi } from '@api';
import { AuthCredentials, PostCommentAPI, UserAPI, userAdapter } from '@domain';

const POST_ID = 1;

const aparecidoUserAPI: UserAPI = {
  id: 9,
  first_name: 'Aparecido',
  last_name: 'Doneida',
  username: 'lacêvai',
  email: 'doneida@email.com',
  profile_url: 'fake-url',
  is_online: false,
  full_name: 'Aparecido Doneida',
};
export const aparecidoAuthCredentials: AuthCredentials = {
  token: 'access-token',
  tokenExpiresAt: '2026-03-04T00:00:00.000+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(aparecidoUserAPI),
};
export const aparecidoPostCommentAPI: PostCommentAPI = {
  id: 123,
  message: 'Post to Delete',
  user_id: 9,
  post_id: POST_ID,
  created_at: '2023-03-04T22:27:00.000+00:00',
  updated_at: '2023-03-04T22:27:00.000+00:00',
  user: aparecidoUserAPI,
  meta: {},
};
const postCommentAPi: PostCommentAPI = {
  id: 3,
  message: 'Some Comment',
  user_id: 3,
  post_id: POST_ID,
  created_at: '2024-03-03T20:43:00.000+00:00',
  updated_at: '2024-03-03T20:43:00.000+00:00',
  user: {
    id: 3,
    first_name: 'Yuri',
    last_name: 'Chaves',
    username: 'yurichaves',
    email: 'yuri@email.com',

    profile_url: 'fake-url',
    is_online: false,
    full_name: 'Yuri Chaves',
  },
  meta: {},
};

const mockedPostCommentResponse: PageApi<PostCommentAPI> = {
  meta: {
    total: 1,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null,
  },
  data: [postCommentAPi, aparecidoPostCommentAPI],
};

export const mockedData = {
  POST_ID,
  postCommentAPi,
  mockedPostCommentResponse,
  aparecidoAuthCredentials,
  aparecidoPostCommentAPI,
};
