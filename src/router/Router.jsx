import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from '../pages';
import { DesktopLayout } from '../containers';

const Router = () => (
  <DesktopLayout>
    <Switch>
      <Route exact path="/" component={Pages.Home} />

      {/* 404 페이지 */}
      <Route component={Pages.NoMatch} />
    </Switch>
  </DesktopLayout>
);

export default Router;
