import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.scss';

import ErrorBoundary from './core/ErrorBoundary';
import MoviesView from './views/MoviesView';

const RootRedirect = () => <Redirect to="/movies" />;

class App extends React.Component {
  public render() {
    return (
      <Container fluid={true}>
        <ErrorBoundary>
          <Router>
            <div className="app">
              <Route exact={true} path="/" component={RootRedirect} />
              <Route path="/movies" component={MoviesView} />
            </div>
          </Router>
        </ErrorBoundary>
      </Container>
    );
  }
}

export default App;
