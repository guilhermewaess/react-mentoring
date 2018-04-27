import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.scss';

import logo from './logo.svg';

const NewHeader = () => (<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>)

const AppIntro = () => (<p className="App-intro">
  To get started, edit <code>src/App.tsx</code> and save to reload.
</p>)

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <NewHeader />
          <Route exact={true} path='/' component={AppIntro} />
          <Route path='/teste' component={NewHeader} />
        </div>
      </Router>
    );
  }
}

export default App;
