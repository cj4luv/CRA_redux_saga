import {
  call,
  fork,
  put,
  all,
  take,
  // select,
} from 'redux-saga/effects';
import * as actions from '../actions';
import api from '../services';
// import { getUser } from '../reducers/selectors';

const { user } = actions;

/** *************************** Subroutines *********************************** */

function* fetchEntity(entity, apiFn, apiInit) {
  yield put(entity.request(apiInit));
  const { response, error } = yield call(apiFn, apiInit);
  if (response) {
    yield put(entity.success(apiInit, response));
    // console.log('success');
  } else yield put(entity.failure(apiInit, error));
}

// yeah! we can also bind Generators
export const fetchUser = fetchEntity.bind(null, user, api.fetchUser);

// load user unless it is cached
function* loadUser(login) {
  yield call(fetchUser, login);
}

/** *************************************************************************** */
/** ***************************** WATCHERS ************************************ */
/** *************************************************************************** */

// Fetches data for a User : user data
export function* watchLoadUser() {
  while (true) {
    console.log('watchLoadUser');
    const { login } = yield take(actions.LOAD_USER);
    console.log('login', login);

    yield fork(loadUser, login);
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(watchLoadUser),
  ]);
}
