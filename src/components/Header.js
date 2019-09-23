import React from 'react';
import { Button } from 'react-bootstrap';

const styels = {
  container: {
    background: 'yellow',
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
    alignItems: 'center',
    width: '100vw',
  },
  logo: {
    width: 146,
    height: 20,
    background: 'orange',
  },
};

const Menu = ({ menu }) => menu.map((item) => <Button key={item} variant="info">{item}</Button>);

const Header = ({ menu }) => (
  <div style={styels.container}>
    <Button>
      logo
    </Button>
    <Menu menu={menu} />
  </div>
);


export default Header;
