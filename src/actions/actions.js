function action(type, payload = {}) {
  const result = {
    type,
    ...payload,
  };

  return result;
}

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';

export const refreshTokne = {
  request: (apiInit) => action(REFRESH_TOKEN_REQUEST, { apiInit }),
  success: (apiInit, response) => action(REFRESH_TOKEN_SUCCESS, { apiInit, response }),
  failure: (apiInit, error) => action(REFRESH_TOKEN_FAILURE, { apiInit, error }),
};

export const LOAD_REFRESH_TOKEN = 'LOAD_REFRESH_TOKEN';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = {
  request: (apiInit) => action(LOGIN_REQUEST, { apiInit }),
  success: (apiInit, response) => action(LOGIN_SUCCESS, { apiInit, response }),
  failure: (apiInit, error) => action(LOGIN_FAILURE, { apiInit, error }),
};

export const LOAD_LOGIN = 'LOAD_LOGIN';
