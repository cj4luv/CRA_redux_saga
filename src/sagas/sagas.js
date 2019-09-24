/* eslint-disable no-unused-vars */
import {
  call,
  fork,
  all,
  take,
  put,
  delay,
} from 'redux-saga/effects';

import { setCookie, getCookie, deleteCookie } from '../common/CookieUtils';
import { decodeJwt } from '../common/AuthenticationUtils';
import { TOKEN_COOKIE_NAME, REFESH_TOKEN_COOKIE_NAME } from '../common/Constants';

import * as actions from '../actions';
import endpoints from '../services/endpoints';
import callApi from '../services/api';

/** *************************** Utils *********************************** */

function updateTokenCookie(token, cookieName) {
  const jwtData = decodeJwt(token);
  const timestamp = jwtData.exp * 1000;

  setCookie(cookieName, token, timestamp);
}

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

  // console.log('results call =-==--', results);
  if (response) {
    yield delay(2000);
    yield put(entity.success(apiInit, response));
  } else {
    yield put(entity.failure(apiInit, error));
  }
  return results;
}

const {
  post, login, refreshTokne, sucessAuth,
} = actions;

// apiInit 3번째 매개 변수는 sgaa effects의 call이 호출 되는 부분에서 정의된다.
const fetchAuth = fetchEntity.bind(null, refreshTokne, callApi);
const fetchLogin = fetchEntity.bind(null, login, callApi);
const fetchPosts = fetchEntity.bind(null, post, callApi);

function* loadFefresToken() {
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

  const { response } = yield call(fetchAuth, apiInit);
  if (response) {
    console.log(response);
    try {
      if (response.resultCode !== '20000000') throw response;

      updateTokenCookie(response.accessToken, TOKEN_COOKIE_NAME);
      updateTokenCookie(response.refreshToken, REFESH_TOKEN_COOKIE_NAME);
      // isAuth라는 스토어에 로그인 값을 저장 한다.
    } catch (e) {
      console.log(e.message);
    }
  }
}

function* loadLogin() {
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

  const { response } = yield call(fetchLogin, apiInit);
  if (response) {
    console.log('loadLogin', response);
    try {
      if (response.resultCode !== '20000000') throw response;

      updateTokenCookie(response.accessToken, TOKEN_COOKIE_NAME);
      updateTokenCookie(response.refreshToken, REFESH_TOKEN_COOKIE_NAME);

      yield put(sucessAuth);
    } catch (e) {
      console.log(e.message);
    }
  }
}

function* loadPosts() {
  // const token = 'eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJyb2xlIjoic3VwZXJBZG1pbiIsImRpc3BsYXlOYW1lIjoiKOyjvCnsl5DsnbTsuZjrgpjsnbgg7Iug7IOB7IStIiwibmFtZSI6IuyLoOyDgeyErSIsImV4cCI6MTU2OTU3ODQ4NSwidXNlcklkIjoic2FuZ3Nlb3Auc2hpbiIsImNvbXBOYW1lIjoiKOyjvCnsl5DsnbTsuZjrgpjsnbgiLCJ1c2VyU2VxIjo1LCJlbWFpbCI6InNhbmdzZW9wLnNoaW5AaDl3b3Jrcy5jb20ifQ.hUSo28QG4jG5qnpfjfddPnL4mNOuzVz2_vdyY799xok';
  const token = getCookie(TOKEN_COOKIE_NAME);

  const headers = {
    jwt: token,
  };

  const params = {
    boardType: 'bootstrap',
  };

  const apiInit = {
    method: 'GET',
    url: endpoints.posts,
    headers,
    params,
  };

  /**
   * @param {function} fn - promise 펑션 (http call)
   * @param {object} args - 첫번째 평선의 arguments로 들어간다.
   */
  yield call(fetchPosts, apiInit);
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

export function* watchLoadFefresToken() {
  while (true) {
    yield take(actions.LOAD_REFRESH_TOKEN);
    yield fork(loadFefresToken);
  }
}

export function* watchLoadLogin() {
  while (true) {
    yield take(actions.LOAD_LOGIN);
    yield fork(loadLogin);
  }
}

export function* watchLoadPosts() {
  while (true) {
    yield take(actions.LOAD_POSTS);
    yield fork(loadPosts);
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadFefresToken),
    fork(watchLoadLogin),
    fork(watchLoadPosts),
  ]);
}
