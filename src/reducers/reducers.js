import { combineReducers } from 'redux';
import posts from './posts';
import login from './login';
import auth from './auth';

export default () => combineReducers({
  posts,
  login,
  auth,
});
