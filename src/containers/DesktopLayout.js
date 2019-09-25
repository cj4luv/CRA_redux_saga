/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { vaildToken, updateTokenCookie } from '../common/AuthenticationUtils';
import { TOKEN_COOKIE_NAME, REFESH_TOKEN_COOKIE_NAME } from '../common/Constants';

import { Header } from '../components';
import { LOAD_REFRESH_TOKEN, LOAD_LOGIN } from '../actions';

const Menu = ['가이드', '문서', '테마 & 패키지', 'UX 점검', '커뮤니티'];

const getAuthenticate = (response) => {
  if (!response) return false;
  try {
    const isException = response.resultCode !== '20000000';
    if (isException) throw response;

    updateTokenCookie(response.accessToken, TOKEN_COOKIE_NAME);
    updateTokenCookie(response.refreshToken, REFESH_TOKEN_COOKIE_NAME);

    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

const DesktopLayout = ({ children }) => {
  const dispatch = useDispatch();

  const refreshTokneData = useSelector((state) => state.authentication);
  const { isFetching, response } = refreshTokneData;

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

  const isAuth = getAuthenticate(response);
  console.log('isAuth', isAuth);

  const IHeaderProps = {
    menu: Menu,
    isAuth,
    onLogin,
    isFetching,
  };

  return (
    <div style={DefaultWrapper}>

      <div style={TopWarpper}>
        <Header {...IHeaderProps} />
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
