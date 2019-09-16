import { combineReducers } from 'redux';

import device from './device';
import entities from './entities';
import user from './user';
import headers from './headers';

export default () => combineReducers({
  device,
  headers,
  user,
  entities,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
