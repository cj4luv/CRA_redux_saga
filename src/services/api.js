import { camelizeKeys } from 'humps';
import axios from 'axios';

async function callApi(axiosConfig) {
  try {
    const response = await axios(axiosConfig);
    const { data } = response;

    if (response.status !== 200) {
      return Promise.reject(response.status);
    }

    const camelizedJson = camelizeKeys(data);

    return camelizedJson;
  } catch (error) {
    return { error: error || 'Something bad happened' };
  }
}

export default callApi;
