import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getItem } from '../common/StorageUtils';
import { USER_DATA_STORAGE_NAME } from '../common/Constants';

function PrivateRoute({ component: Child, ...rest }) {
  const routeRender = (props) => {
    const { location } = props;
    const isLogin = getItem(USER_DATA_STORAGE_NAME);

    if (!isLogin) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      );
    }

    return <Child {...props} />;
  };

  return <Route {...rest} render={routeRender} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }),
};

PrivateRoute.defaultProps = {
  component: null,
  location: null,
};

export default PrivateRoute;
