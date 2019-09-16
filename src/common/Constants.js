export const IS_DEV_MODE = process.env.NODE_ENV === 'development';

console.log(process.env);

export const SERVER_URL = IS_DEV_MODE
  ? 'https://api.github.com/'
  : 'http://14.32.136.156:7450';

export const PROJECT_NAME = 'hipay';

export const USER_DATA_STORAGE_NAME = `${PROJECT_NAME}_cli`;
