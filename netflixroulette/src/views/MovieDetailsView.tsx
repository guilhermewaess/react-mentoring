import * as React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import MovieDetails from '../containers/MovieDetails';

export default ({ match }: RouteComponentProps<RouteProps>) => (
  <Route exatc={true} path={`${match.url}/:id`} component={MovieDetails} />
);
