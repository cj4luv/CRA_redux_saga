/* eslint-disable no-unused-vars */
export function setCookie(cookieName, cookieValue, cookieExpire, cookiePath = '/') {
  const d = new Date();
  d.setTime(cookieExpire);

  let cookieText = `${escape(cookieName)}=${escape(cookieValue)}`;
  cookieText += (cookieExpire ? `; EXPIRES=${d.toGMTString()}` : '');
  cookieText += (cookiePath ? `; PATH=${cookiePath}` : '');

  document.cookie = cookieText;
}

// export function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   const encodedValue = encodeURIComponent(cvalue);
//   d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));

//   const expires = `expires=${d.toUTCString()}`;
//   document.cookie = `${cname}=${encodedValue};${expires};path=/`;
// }

export function getCookie(cookieName) {
  let cookieValue = null;

  if (document.cookie) {
    const array = document.cookie.split((`${escape(cookieName)}=`));
    if (array.length >= 2) {
      const arraySub = array[1].split(';');
      cookieValue = unescape(arraySub[0]);
    }
  }
  return cookieValue;
}

export function deleteCookie(cookieName) {
  const temp = getCookie(cookieName);
  if (temp) {
    const d = new Date(1);
    setCookie(cookieName, temp, (d));
  }
}
