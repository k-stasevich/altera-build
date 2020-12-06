import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from './components/pages/home';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { VersionPage } from './components/pages/VersionPage';
import { ContactUsPage } from './components/pages/contact-us';
import { ServicesPage } from './components/pages/services';

export function Router() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="/version" component={VersionPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/services" component={ServicesPage} />

          <Redirect to="/404" />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}
