import {
  LOAD_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  apiInit: '',
  isFetching: false,
  response: null,
  error: null,
};

// **** 리듀서 작성
export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOAD_AUTH:
      return {
        ...state,
        ...action.auth,
      };
    case AUTH_REQUEST:
      return {
        ...state,
        isFetching: true,
        apiInit: action.apiInit,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        apiInit: action.apiInit,
        response: action.response,
      };
    case AUTH_FAILURE:
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
