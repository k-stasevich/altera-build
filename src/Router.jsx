import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/404Page';

export function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/404">
          <NotFoundPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
