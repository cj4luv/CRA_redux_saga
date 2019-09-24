import { combineReducers } from 'redux';

import auth from './auth';
import posts from './posts';
import login from './login';
import refreshTokne from './refreshTokne';

export default () => combineReducers({
  posts,
  login,
  refreshTokne,
  auth,
});
