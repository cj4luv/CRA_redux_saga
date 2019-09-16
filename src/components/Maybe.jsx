import * as React from 'react';
import PropTypes from 'prop-types';

const Maybe = ({ test, children }) => (
  <>{test && children}</>
);

Maybe.propTypes = {
  test: PropTypes.bool,
  children: PropTypes.node,
};

Maybe.defaultProps = {
  test: false,
  children: React.createElement('div'),
};

export default Maybe;
