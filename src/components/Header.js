/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Maybe from './Maybe';

const styels = {
  container: {
    background: 'yellow',
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
    alignItems: 'center',
    width: '100vw',
    justifyContent: 'space-between',

  },
  logo: {
    width: 146,
    height: 20,
    background: 'orange',
  },
};

const Menu = ({ menu }) => menu.map((item) => <Button key={item} variant="info">{item}</Button>);

const Header = ({ menu, isAuth, onLogin }) => (
  <div style={styels.container}>
    <Button>
      logo
    </Button>
    <div>
      <Menu menu={menu} />
    </div>
    <div>
      <Maybe test={!isAuth}>
        <Button variant="secondary" onClick={onLogin}>
          로그인
        </Button>
      </Maybe>

      <Maybe test={isAuth}>
        <Button variant="secondary">
          검색
        </Button>
        <Button variant="secondary">
          알람
        </Button>
        <Button variant="secondary">
          프로파일
        </Button>
      </Maybe>

      <Button variant="light">
        프로젝트 가기
      </Button>
    </div>
  </div>
);


export default Header;
