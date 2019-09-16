// 리덕스 스토어에 있는 값을 사가로 가져오기 위한 액션크리에이터
export const getUser = (state, login) => state.entities.users[login];
export const getHeaders = state => state.headers;
