/* eslint-disable no-unused-vars */
import {
  call,
  fork,
  all,
  take,
  put,
} from 'redux-saga/effects';
import * as actions from '../actions';

import endpoints from '../services/endpoints';
import callApi from '../services/api';

const { post } = actions;

/** *************************** APIs *********************************** */
const getPostsApi = (apiInit) => callApi(apiInit);

/** *************************** Subroutines *********************************** */

function* fetchEntity(entity, apiFn, apiInit) {
  // console.log('fetchEntity', entity);
  yield put(entity.request(apiInit));
  const { response, error } = yield call(apiFn, apiInit);

  // console.log('response call =-==--', response);
  if (response) {
    // console.log('success');
    yield put(entity.success(apiInit, response));
  } else yield put(entity.failure(apiInit, error));
}

// 3번째 api를 기입
const fetchPosts = fetchEntity.bind(null, post, getPostsApi);

function* loadPosts() {
  const headers = {
    jwt: 'eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJyb2xlIjoic3VwZXJBZG1pbiIsImRpc3BsYXlOYW1lIjoiKOyjvCnsl5DsnbTsuZjrgpjsnbgg7Iug7IOB7IStIiwibmFtZSI6IuyLoOyDgeyErSIsImV4cCI6MTU2OTU3ODQ4NSwidXNlcklkIjoic2FuZ3Nlb3Auc2hpbiIsImNvbXBOYW1lIjoiKOyjvCnsl5DsnbTsuZjrgpjsnbgiLCJ1c2VyU2VxIjo1LCJlbWFpbCI6InNhbmdzZW9wLnNoaW5AaDl3b3Jrcy5jb20ifQ.hUSo28QG4jG5qnpfjfddPnL4mNOuzVz2_vdyY799xok',
  };

  const params = {
    searchBoardType: 'bootstrap',
  };

  const apiInit = {
    method: 'GET',
    url: endpoints.posts,
    headers,
    params,
  };

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
