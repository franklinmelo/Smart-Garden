import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import { isAuthenticated } from 'services/auth';

const DashBoardView = lazy(() => import('pages/dashBoard/DashBoardView'));
const ConfigView = lazy(() => import('pages/configView/ConfigView'));
const SignIn = lazy(() => import('pages/sign-in/SignIn'));

const Routes = ({ location }) => {
  if (!isAuthenticated() && location.pathname !== '/entrar') {
    return <Redirect to="/entrar" />;
  }

  if (isAuthenticated() && location.pathname === '/entrar') {
    return <Redirect to="/" />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/config" component={ConfigView} />
        <Route path="/entrar" component={SignIn} />
        <Route exact path="/" component={DashBoardView} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
