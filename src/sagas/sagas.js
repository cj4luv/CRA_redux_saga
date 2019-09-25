/* eslint-disable no-unused-vars */
import {
  call,
  fork,
  all,
  take,
  put,
  delay,
} from 'redux-saga/effects';

import { getCookie } from '../common/CookieUtils';
import { TOKEN_COOKIE_NAME, REFESH_TOKEN_COOKIE_NAME } from '../common/Constants';

import * as actions from '../actions';
import { endpoints, request } from '../services';

const { login, refreshTokne } = actions;

/** *************************** Api *********************************** */

const putIssueToken = () => {
  const token = getCookie(REFESH_TOKEN_COOKIE_NAME);
  const jwt = token || '';

  const headers = {
    jwt,
  };

  const apiInit = {
    method: 'PUT',
    headers,
    url: endpoints.authController.issueToken,
  };

  const results = fetchEntity.bind(null, refreshTokne, request, apiInit);

  return results;
};

const putLogin = () => {
  const token = getCookie(TOKEN_COOKIE_NAME);
  const jwt = token || '';

  const headers = {
    jwt,
  };

  const params = {
    userId: 'jaehun.cho',
    password: 'Ruddls9257!',
  };

  const apiInit = {
    method: 'PUT',
    url: endpoints.authController.login,
    headers,
    params,
  };

  const results = fetchEntity.bind(null, login, request, apiInit);

  return results;
};

/** *************************** Subroutines *********************************** */

/**
 * @param {object} entity - request, success, failure 액션을 담은 구조체
 * @param {function} apiFn - http call을 담당하는 함수
 * @param {object} apiInit - api init 정보를 담는 변수
 */
function* fetchEntity(entity, apiFn, apiInit) {
  yield put(entity.request(apiInit));

  const { response, error } = yield call(apiFn, apiInit);
  const results = { response, error };

  // console.log('results call =----->', results);
  if (response) {
    yield delay(1000);
    yield put(entity.success(apiInit, response));
  } else {
    yield put(entity.failure(apiInit, error));
  }
  return results;
}

function* fetchRefresToken() {
  const api = putIssueToken();
  yield call(api);
}

function* fetchLogin() {
  const api = putLogin();
  yield call(api);
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

function* watchLoadFefresToken() {
  while (true) {
    yield take(actions.LOAD_REFRESH_TOKEN);
    yield fork(fetchRefresToken);
  }
}

function* watchLoadLogin() {
  while (true) {
    yield take(actions.LOAD_LOGIN);
    yield fork(fetchLogin);
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadFefresToken),
    fork(watchLoadLogin),
  ]);
}
