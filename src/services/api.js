import { camelizeKeys } from 'humps';
import axios from 'axios';

import { BASE_URL } from './endpoints';

axios.defaults.baseURL = BASE_URL;

async function callApi(axiosConfig) {
  try {
    const response = await axios(axiosConfig);
    const { data } = response;

    if (response.status !== 200) {
      return Promise.reject(response.status);
    }

    const camelizedJson = camelizeKeys(data);
    // console.log('camelizedJson', camelizedJson);

    const results = { response: camelizedJson };

    return results;
  } catch (error) {
    console.log('catched err');
    return { error: error || 'Something bad happened' };
  }
}

export default callApi;
