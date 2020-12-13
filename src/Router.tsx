import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from './components/pages/home';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { VersionPage } from './components/pages/VersionPage';
import { ContactUsPage } from './components/pages/contact-us';
import { ServicesPage } from './components/pages/services';

export function Router() {
  return (
    <BrowserRouter>
      <Inner />
    </BrowserRouter>
  );
}

function Inner() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      {/* 
        'location' and 'key' props are used for
        animation to not cancel animation in progress
        when page is changed
      */}
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={HomePage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/version" component={VersionPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/services" component={ServicesPage} />

        <Redirect to="/404" />
      </Switch>
    </AnimatePresence>
  );
}
