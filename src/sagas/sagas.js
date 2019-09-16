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

const { changePosts } = actions;

/** *************************** Subroutines *********************************** */

function* loadPosts() {
  const apiInit = {
    method: 'get',
    url: endpoints.posts,
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
