import { SUCCESS_AUTH } from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  isAuth: false,
};
// **** 리듀서 작성
export default function login(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_AUTH:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
}
