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

const { changePosts, user } = actions;

/** *************************** APIs *********************************** */

const getPostsApi = (apiInit) => callApi(apiInit);

/** *************************** Subroutines *********************************** */

function* fetchEntity(entity, apiFn, apiInit) {
  yield put(entity.request(apiInit));
  const { response, error } = yield call(apiFn, apiInit);
  if (response) {
    yield put(entity.success(apiInit, response));
    // console.log('success');
  } else yield put(entity.failure(apiInit, error));
}

// 3번째 api를 기입
const fetchPosts = fetchEntity.bind(null, user, getPostsApi);

function* loadPosts() {
  const headers = {
    jwt: 'eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJyb2xlIjoic3VwZXJBZG1pbiIsImRpc3BsYXlOYW1lIjoiKOyjvCnsl5DsnbTsuZjrgpjsnbgg7Iug7IOB7IStIiwibmFtZSI6IuyLoOyDgeyErSIsImV4cCI6MTU2OTU3ODQ4NSwidXNlcklkIjoic2FuZ3Nlb3Auc2hpbiIsImNvbXBOYW1lIjoiKOyjvCnsl5DsnbTsuZjrgpjsnbgiLCJ1c2VyU2VxIjo1LCJlbWFpbCI6InNhbmdzZW9wLnNoaW5AaDl3b3Jrcy5jb20ifQ.hUSo28QG4jG5qnpfjfddPnL4mNOuzVz2_vdyY799xok',
  };

  console.log('headers', headers);

  const apiInit = {
    method: 'GET',
    url: endpoints.posts,
    headers,
    params: {
      searchBoardType: 'bootstrap',
    },
  };

  const response = yield call(callApi, apiInit);
  console.log('loadPosts res', response);

  if (response) {
    yield put(changePosts(response));
  }
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

export function* watchLoadPosts() {
  while (true) {
    const { posts } = yield take(actions.POSTS);
    console.log('watchLoadPosts', posts);

    yield call(loadPosts);
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadPosts),
  ]);
}
