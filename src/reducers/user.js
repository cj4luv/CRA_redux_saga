import { USER_SUCCESS } from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  dvUuid: '',
  pidUser: -100000,
  token: '',
};

// **** 리듀서 작성
export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
}
