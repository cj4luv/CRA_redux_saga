export const IS_DEV_MODE = process.env.NODE_ENV === 'development';

export const SERVER_URL = IS_DEV_MODE
  ? 'https://api.github.com/'
  : 'http://14.32.136.156:7450';

export const PROJECT_NAME = 'usx';

export const USER_DATA_STORAGE_NAME = `${PROJECT_NAME}_cli`;

export const TOKEN_COOKIE_NAME = 'usx_tk';
export const REFESH_TOKEN_COOKIE_NAME = 'usx_re_tk';
