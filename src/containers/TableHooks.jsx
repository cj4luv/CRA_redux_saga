/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { Table } from 'react-bootstrap';

const SERVER_URL = 'https://jsonplaceholder.typicode.com/';
const API_URLS = {
  posts: `${SERVER_URL}/posts`,
};

const getPostsApi = async (url) => {
  const response = await fetch(url);
  const responseData = response.json();
  console.log('resData', responseData);

  return responseData;
};

const usePromise = async (promiseCreator, deps) => {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pro = async () => {
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const useCallbackPro = (() => useCallback(pro, [loading, resolved, error]));

  useEffect(useCallbackPro, deps);

  return [loading, resolved, error];
};

// const useTableData = (initData = null) => {
//   const [tableData, setTableData] = useState(initData);

//   return { tableData, setTableData };
// };

const TableHooks = () => {
  const { tableData, setTableData } = useState(null);

  const apiUrl = API_URLS.posts;
  const promiseCreator = getPostsApi(apiUrl);

  const [loading, resolved, error] = usePromise(promiseCreator, []);

  if (loading) return <div>로딩중..!</div>;
  if (error) return <div>에러 발생!</div>;
  if (!resolved) return null;

  return (
    <Table striped bordered hover>
      tyab
    </Table>
  );
};

export default TableHooks;
