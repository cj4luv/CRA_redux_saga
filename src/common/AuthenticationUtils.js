import { getCookie } from './CookieUtils';
import { REFESH_TOKEN_COOKIE_NAME } from './Constants';

export const decodeJwt = (jwt) => {
  const ca = jwt;
  const payload = ca.split('.')[1];

  const decodeBase64Token = atob(payload);
  const parseDecodeToken = JSON.parse(decodeBase64Token);

  return parseDecodeToken;
};

export const isExpiredToken = (exp) => {
  const now = Date.now();
  const timestamp = exp * 1000;
  const tokenExp = new Date(timestamp);
  const isExpired = tokenExp < now;
  return isExpired;
};

export const vaildToken = () => {
  try {
    const token = getCookie(REFESH_TOKEN_COOKIE_NAME);
    const jwt = token || '';
    const isUseJwt = !!jwt;

    console.log(isUseJwt, jwt);

    if (isUseJwt) {
      const payload = decodeJwt(jwt);
      const isExpired = isExpiredToken(payload.exp);

      console.log(isExpired);
      return isExpired;
    }
    return isUseJwt;
  } catch (e) {
    return false;
  }
};
