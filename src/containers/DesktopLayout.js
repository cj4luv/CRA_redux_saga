/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Maybe } from '../components';
import { LOAD_AUTH } from '../actions';

const Menu = ['가이드', '문서', '테마 & 패키지', 'UX 점검', '커뮤니티'];

const DesktopLayout = ({ children }) => {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { isFetching, response, error } = authData;

  const isLoding = isFetching || !response;

  useEffect(() => {
    console.log('useEffect');
    // dispatch({ type: LOAD_AUTH });
  }, []);

  return (
    <div style={DefaultWrapper}>
      <Maybe test={isLoding}>
        <div style={TopWarpper}>
          now loading...
        </div>
      </Maybe>
      <Maybe test={!isLoding}>
        <div style={TopWarpper}>
          <Header menu={Menu} />
        </div>
      </Maybe>

      <div style={BottomWrapper}>
        <div style={Sidebar}>
          LNB
        </div>
        <div style={Content}>
          {children}
        </div>
      </div>
    </div>
  );
};

const DefaultWrapper = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const TopWarpper = {
  minHeight: 60,
  display: 'flex',
  backgroundColor: 'red',
};

const BottomWrapper = {
  display: 'flex',
  flex: 1,
  backgroundColor: 'green',
};

const Content = {
  flex: 1,
  backgroundColor: 'violet',
};

const Sidebar = {
  minWidth: 200,
  backgroundColor: 'blue',
};

export default DesktopLayout;
