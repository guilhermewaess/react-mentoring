import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';
import './App.scss';

import MoviesView from './views/MoviesView';

const RootRedirect = () => <Redirect to='/movies' />;

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="app">
          <Route exact={true} path='/' component={RootRedirect} />
          <Route path="/movies" component={MoviesView} />
        </div>
      </Router>
    );
  }
}

export default App;
