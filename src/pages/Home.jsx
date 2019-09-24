/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LOAD_LOGIN, LOAD_POSTS } from '../actions';

const styles = {
  topBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
  },
};

const Home = () => {
  const loginData = useSelector((state) => state.login);
  const postsData = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    dispatch({ type: LOAD_LOGIN });
    dispatch({ type: LOAD_POSTS });
  }, []);

  const { isFetching, response, error } = loginData;

  console.log('login data', loginData);
  console.log('post data', postsData);

  if (isFetching || !response) {
    console.log('loading....');
    return (
      <div style={styles.topBox}>
        now loading...
      </div>
    );
  }

  const isEmptyData = response && response.boardList && response.boardList.length === 0;
  const isRenderEmpty = !isFetching && isEmptyData;
  if (isRenderEmpty) {
    console.log('empty');
    return <div style={styles.topBox}>empty</div>;
  }

  const isRenderError = !isFetching && error;
  if (isRenderError) {
    console.log('error', error);

    return <p>{error}</p>;
  }

  const { boardList } = response;

  const renderRow = (boardSeq, title) => (
    <div style={{ display: 'flex' }} key={`boardList${boardSeq}`}>
      <p>{boardSeq}</p>
      <p>{title}</p>
    </div>
  );

  try {
    const renderBoardList = boardList.map((item) => renderRow(item.boardSeq, item.title));
    return (
      <div style={styles.topBox}>
        {renderBoardList}
      </div>
    );
  } catch {
    return (
      <div style={styles.topBox}>
        {response.message}
      </div>
    );
  }
};

export default Home;
