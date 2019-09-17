/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// import { Board } from '../components';
import { LOAD_POSTS } from '../actions';

const Home = () => {
  const postsData = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_POSTS });
  }, []);

  const { isFetching, response, error } = postsData;
  if (isFetching) {
    console.log('loading....');
    return <p>loading</p>;
  }

  const isEmptyData = response && response.boardList && response.boardList.length === 0;
  const isRenderEmpty = !isFetching && isEmptyData;
  if (isRenderEmpty) {
    console.log('empty');
    return <p>empty</p>;
  }

  const isRenderError = !isFetching && error;
  if (isRenderError) {
    console.log('error', error);

    return <p>{error}</p>;
  }

  console.log('postsData', postsData);

  return (
    <>
      <p>show data...</p>
    </>
  );
};

Home.propTypes = {
  posts: PropTypes.shape({}),
};

Home.defaultProps = {
  posts: null,
};

export default Home;
