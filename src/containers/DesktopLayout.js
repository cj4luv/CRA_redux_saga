/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { vaildToken } from '../common/AuthenticationUtils';

import { Header } from '../components';
import { LOAD_REFRESH_TOKEN, LOAD_LOGIN } from '../actions';

const Menu = ['가이드', '문서', '테마 & 패키지', 'UX 점검', '커뮤니티'];

const DesktopLayout = ({ children }) => {
  const authData = useSelector((state) => state.auth);
  const { isAuth } = authData;

  const dispatch = useDispatch();

  const refreshTokneData = useSelector((state) => state.refreshTokne);
  const { isFetching, response, error } = refreshTokneData;

  const isUseToken = vaildToken();
  console.log('isUseToken', isUseToken, isFetching);

  useEffect(() => {
    if (isUseToken) {
      dispatch({ type: LOAD_REFRESH_TOKEN });
    }
  }, []);

  const onLogin = () => {
    dispatch({ type: LOAD_LOGIN });
  };

  return (
    <div style={DefaultWrapper}>

      <div style={TopWarpper}>
        <Header menu={Menu} isAuth={isAuth} onLogin={onLogin} />
      </div>

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
