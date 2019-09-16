import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Pages from '../pages';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Pages.Home} />

    {/* 404 페이지 */}
    <Route component={Pages.NoMatch} />
  </Switch>
);

export default Router;
