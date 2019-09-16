import { HEADERS } from '../actions/actions';
import * as DefaultState from '../common/DefaultProps';

// **** 초기상태 정의
const initialState = {
  ...DefaultState.headers,
};

// **** 리듀서 작성
export default function headers(state = initialState, action) {
  switch (action.type) {
    case HEADERS:
      return {
        ...state,
        ...action.headers,
      };
    default:
      return state;
  }
}
