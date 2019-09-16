import { schema, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';

import { SERVER_URL } from '../common/Constants';

const API_ROOT = SERVER_URL;

// Extracts the next page URL from Github API response.
function getNextPageUrl(response) {
  const link = response.headers.get('link');
  if (!link) {
    return null;
  }

  const nextLink = link.split(',').find((s) => s.indexOf('rel="next"') > -1);
  if (!nextLink) {
    return null;
  }

  return nextLink.split(';')[0].slice(1, -1);
}

function callApi(endpoint, schemaData) {
  // query 키가 apiInit에 존재하는지 체크 하는 함수 생성 필요
  try {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return fetch(fullUrl)
      .then((response) => response.json().then((json) => ({ json, response }))).then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json);
        }

        const camelizedJson = camelizeKeys(json);
        const nextPageUrl = getNextPageUrl(response);

        return {
          ...normalize(camelizedJson, schemaData),
          nextPageUrl,
        };
      })
      .then(
        (response) => ({ response }),
        (error) => ({ error: error.message || 'Something bad happened' }),
      );
  } catch (error) {
    return { error: error || 'Something bad happened' };
  }
}

// Schemas for Github API responses.
const userSchema = new schema.Entity('users', {
  idAttribute: 'login',
});

// api services
export const fetchUser = (login) => callApi(`users/${login}`, userSchema);
export const tem = '';
