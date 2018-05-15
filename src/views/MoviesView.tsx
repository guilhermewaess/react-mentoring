import * as React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

import MoviesContainer from './../containers/Movies';

export default ({ match }: RouteComponentProps<RouteProps>) => (
  <Route exatc={true} path={match.url} component={MoviesContainer} />
);
