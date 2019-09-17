import {
  LOAD_POSTS,
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE,
} from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  apiInit: '',
  isFetching: false,
  response: null,
  error: null,
};

// **** 리듀서 작성
export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        ...action.posts,
      };
    case POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        apiInit: action.apiInit,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        apiInit: action.apiInit,
        response: action.response,
      };
    case POSTS_FAILURE:
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
