import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { VersionPage } from './pages/VersionPage';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/version" component={VersionPage} />

        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
