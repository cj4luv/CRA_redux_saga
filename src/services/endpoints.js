// api url
const SERVER_URL = 'http://223.62.241.90/';

const PROJECT_NAME = 'uxs';

export const BASE_URL = `${SERVER_URL}${PROJECT_NAME}`;

const endpoints = {
  authController: {
    login: '/auth/login.do',
    issueToken: '/auth/issueToken.do',
  },
  posts: '/landing/board/getBoardList.do',
};

export default endpoints;
