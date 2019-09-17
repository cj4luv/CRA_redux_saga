export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

function action(type, payload = {}) {
  const result = {
    type,
    ...payload,
  };

  return result;
}

export const post = {
  request: (apiInit) => action(POSTS_REQUEST, { apiInit }),
  success: (apiInit, response) => action(POSTS_SUCCESS, { apiInit, response }),
  failure: (apiInit, error) => action(POSTS_FAILURE, { apiInit, error }),
};

export const POSTS = 'POSTS';
export const changePosts = (posts) => ({ type: POSTS, posts });
