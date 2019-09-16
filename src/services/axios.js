import axios from 'axios';

const processResponse = (res) => {
  try {
    const isReqeustFailed = res.status !== 200;
    if (isReqeustFailed) {
      console.log('통신 에러', res);
      const errData = {
        status: res.status,
        results: res.statusText,
      };
      return errData;
    }

    const { data } = res;
    console.log('processResponse', data);

    return data;
  } catch (error) {
    console.log('processResponse error');
    return processErrorData(error);
  }
};

const processErrorData = (err) => {
  console.error('processErrorData 서버가 불안정합니다.', err);
  const errData = {
    status: -10000,
    results: err,
  };

  return errData;
};

export const Get = async (url, config) => {
  try {
    const res = await axios.get(url, config);

    return processResponse(res);
  } catch (error) {
    return processErrorData(error);
  }
};

export const Post = async (url, config) => {
  try {
    const data = {};
    const res = await axios.post(url, data, config);

    return processResponse(res);
  } catch (error) {
    return processErrorData(error);
  }
};

export const Put = async (url, config) => {
  try {
    const data = {};
    const res = await axios.put(url, data, config);

    return processResponse(res);
  } catch (error) {
    return processErrorData(error);
  }
};

export const Delete = async (url, config) => {
  try {
    const data = {};
    const res = await axios.delete(url, data, config);

    return processResponse(res);
  } catch (error) {
    return processErrorData(error);
  }
};
