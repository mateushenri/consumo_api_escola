import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/login';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';

import MyRoute from './myroute';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
