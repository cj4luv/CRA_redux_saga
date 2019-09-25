import { getCookie, setCookie } from './CookieUtils';
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

  const isExpired = timestamp < now;
  return isExpired;
};

export const vaildToken = () => {
  try {
    const token = getCookie(REFESH_TOKEN_COOKIE_NAME);
    const jwt = token || '';
    const isUseJwt = !!jwt;


    if (isUseJwt) {
      const payload = decodeJwt(jwt);
      const isUseToken = !isExpiredToken(payload.exp);

      return isUseToken;
    }
    return isUseJwt;
  } catch (e) {
    return false;
  }
};

export function updateTokenCookie(token, cookieName) {
  const jwtData = decodeJwt(token);
  const timestamp = jwtData.exp * 1000;

  setCookie(cookieName, token, timestamp);
}
