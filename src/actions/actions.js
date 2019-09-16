const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const result = [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

  return result;
}

export const USER = createRequestTypes('USER');

export const LOAD_USER = 'LOAD_USER';

function action(type, payload = {}) {
  const result = {
    type,
    ...payload,
  };

  return result;
}

export const USER_REQUEST = USER[REQUEST];
export const USER_SUCCESS = USER[SUCCESS];
export const USER_FAILURE = USER[FAILURE];

export const user = {
  request: (loginApi) => action(USER_REQUEST, { loginApi }),
  success: (loginApi, response) => action(USER_SUCCESS, { loginApi, response }),
  failure: (loginApi, error) => action(USER_FAILURE, { loginApi, error }),
};

export const loadUser = (login) => action(LOAD_USER, { login });

/** *************************************************************************** */
/** ***************************** 아래는 좀더 고민을 해봐야됨 ************************************ */
/** *************************************************************************** */

// 액션 타입 정의
export const HEADERS = 'HEADERS';

// 액션 생성함수 정의
export const changeHeaders = (headers) => ({ type: HEADERS, headers });

export const DEVICE = 'DEVICE';

export const changeDevice = (device) => ({ type: DEVICE, device });
