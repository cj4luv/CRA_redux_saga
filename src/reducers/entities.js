import { merge } from 'lodash/object';

// **** 초기상태 정의
const initialState = {};

// Updates an entity cache in response to any action with response.entities.
export default function entities(state = initialState, action) {
  if (action.response && action.response.entities) {
    // console.log('entities', action.response);
    return merge({}, state, action.response.entities);
  }

  return state;
}
