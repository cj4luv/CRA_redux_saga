import { DEVICE } from '../actions/actions';

// **** 초기상태 정의
const initialState = {
  available: false,
  manufacturer: 'unknow',
  model: 'unknow',
  platform: 'unknow',
  serial: 'unknow',
  uuid: 'unknow',
  version: '0.0.0',
};

// **** 리듀서 작성
export default function device(state = initialState, action) {
  switch (action.type) {
    case DEVICE:
      return {
        ...state,
        ...action.device,
      };
    default:
      return state;
  }
}
