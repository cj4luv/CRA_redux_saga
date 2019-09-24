import {
  LOAD_LOGIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_REFRESH_TOKEN,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  SUCCESS_AUTH,
} from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  apiInit: '',
  isFetching: false,
  response: null,
  error: null,
  isAuth: false,
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_AUTH:
      return {
        ...state,
        isAuth: true,
      };
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
    case LOAD_REFRESH_TOKEN:
      return {
        ...state,
        ...action.authentication,
      };
    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        isFetching: true,
        apiInit: action.apiInit,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        apiInit: action.apiInit,
        response: action.response,
      };
    case REFRESH_TOKEN_FAILURE:
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
