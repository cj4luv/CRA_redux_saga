function action(type, payload = {}) {
  const result = {
    type,
    ...payload,
  };

  return result;
}

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const AUTH = {
  request: (apiInit) => action(AUTH_REQUEST, { apiInit }),
  success: (apiInit, response) => action(AUTH_SUCCESS, { apiInit, response }),
  failure: (apiInit, error) => action(AUTH_FAILURE, { apiInit, error }),
};

export const LOAD_AUTH = 'LOAD_AUTH';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = {
  request: (apiInit) => action(LOGIN_REQUEST, { apiInit }),
  success: (apiInit, response) => action(LOGIN_SUCCESS, { apiInit, response }),
  failure: (apiInit, error) => action(LOGIN_FAILURE, { apiInit, error }),
};

export const LOAD_LOGIN = 'LOAD_LOGIN';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

export const post = {
  request: (apiInit) => action(POSTS_REQUEST, { apiInit }),
  success: (apiInit, response) => action(POSTS_SUCCESS, { apiInit, response }),
  failure: (apiInit, error) => action(POSTS_FAILURE, { apiInit, error }),
};

export const LOAD_POSTS = 'LOAD_POSTS';
