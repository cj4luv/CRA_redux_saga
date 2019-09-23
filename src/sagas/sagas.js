/* eslint-disable no-unused-vars */
import {
  call,
  fork,
  all,
  take,
  put,
  delay,
} from 'redux-saga/effects';
import * as actions from '../actions';

import endpoints from '../services/endpoints';
import callApi from '../services/api';

const { post } = actions;

/** *************************** APIs *********************************** */
const getPostsApi = (apiInit) => callApi(apiInit);

/** *************************** Subroutines *********************************** */

/**
 * @param {object} entity - request, success, failure 액션을 담은 구조체
 * @param {function} apiFn - http call을 담당하는 함수
 * @param {object} apiInit - api init 정보를 담는 변수
 */
function* fetchEntity(entity, apiFn, apiInit) {
  // console.log('fetchEntity', entity);
  yield put(entity.request(apiInit));
  const { response, error } = yield call(apiFn, apiInit);

  // console.log('response call =-==--', response);
  if (response) {
    // console.log('success');
    yield delay(2000);
    yield put(entity.success(apiInit, response));
  } else yield put(entity.failure(apiInit, error));
}

// apiInit 3번째 매개 변수는 sgaa effects의 call이 호출 되는 부분에서 정의된다.
const fetchPosts = fetchEntity.bind(null, post, getPostsApi);

function* loadPosts() {
  const headers = {
    jwt: 'eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJyb2xlIjoic3VwZXJBZG1pbiIsImRpc3BsYXlOYW1lIjoiKOyjvCnsl5DsnbTsuZjrgpjsnbgg7Iug7IOB7IStIiwibmFtZSI6IuyLoOyDgeyErSIsImV4cCI6MTU2OTU3ODQ4NSwidXNlcklkIjoic2FuZ3Nlb3Auc2hpbiIsImNvbXBOYW1lIjoiKOyjvCnsl5DsnbTsuZjrgpjsnbgiLCJ1c2VyU2VxIjo1LCJlbWFpbCI6InNhbmdzZW9wLnNoaW5AaDl3b3Jrcy5jb20ifQ.hUSo28QG4jG5qnpfjfddPnL4mNOuzVz2_vdyY799xok',
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
  const response = yield call(fetchPosts, apiInit);
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

export function* watchLoadPosts() {
  while (true) {
    const { posts } = yield take(actions.LOAD_POSTS);
    console.log('watchLoadPosts', posts);

    yield call(loadPosts);
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadPosts),
  ]);
}
