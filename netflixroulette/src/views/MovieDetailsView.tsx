import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

import MovieDetails from '../containers/MovieDetails';

export default ({ match }: RouteComponentProps<RouteProps>) => (
  <Router>
    <Route exatc={true} path={`${match.url}/:id`} component={MovieDetails} />
  </Router>
);
