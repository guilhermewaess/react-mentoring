import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.scss';
import ErrorBoundary from './core/ErrorBoundary';
import MovieDetailsView from './views/MovieDetailsView';
import MoviesView from './views/MoviesView';


class App extends React.Component<any> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <Container fluid={true} className="p-0 m-0 fixed-top">
          <ErrorBoundary>
            <Router>
              <div className="app">
                <Switch>
                  <Route path="/movies" component={MoviesView} />
                  <Route path="/movie-details" component={MovieDetailsView} />
                  <Redirect from='/' to='/movies' />
                </Switch>
              </div>
            </Router>
          </ErrorBoundary>
        </Container>
      </Provider>
    );
  }
}

export default App;
