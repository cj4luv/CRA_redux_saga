/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';

import { Board } from '../components';
import { changePosts } from '../actions';

const Home = (props) => {
  const { getPosts } = props;

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    getPosts();
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
  getPosts: PropTypes.func.isRequired,
};

Home.defaultProps = {
  posts: null,
};

const mapStateToProps = (state) => {
  const { posts } = state;

  return {
    posts,
  };
};

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(changePosts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
