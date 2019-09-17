/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Board } from '../components';
import { POSTS } from '../actions';

const Home = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: POSTS });
  }, []);

  console.log('posts', posts);

  return (
    <>
      <Board />
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
