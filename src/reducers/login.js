import {
  LOAD_LOGIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  apiInit: '',
  isFetching: false,
  response: null,
  error: null,
};

// **** 리듀서 작성
export default function login(state = initialState, action) {
  switch (action.type) {
    case LOAD_LOGIN:
      return {
        ...state,
        ...action.login,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        apiInit: action.apiInit,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        apiInit: action.apiInit,
        response: action.response,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        apiInit: action.apiInit,
        error: action.error,
      };
    default:
      return state;
  }
}
