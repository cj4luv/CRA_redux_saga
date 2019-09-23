/* eslint-disable react/prop-types */
import React from 'react';

import { Header } from '../components';

const Menu = ['가이드', '문서', '테마 & 패키지', 'UX 점검', '커뮤니티'];

const DesktopLayout = ({ children }) => (
  <div style={DefaultWrapper}>
    <div style={TopWarpper}>
      <Header menu={Menu} />
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
