import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';
import Movies from './../containers/Movies';

export default ({ match }: RouteComponentProps<RouteProps>) => (
  <Router>
    <Route exatc={true} path={match.url} component={Movies} />
  </Router>
);
