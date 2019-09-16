import { POSTS } from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  userId: 0,
  id: 0,
  title: '',
  body: '',
};

// **** 리듀서 작성
export default function posts(state = initialState, action) {
  switch (action.type) {
    case POSTS:
      return {
        ...state,
        ...action.posts,
      };
    default:
      return state;
  }
}
