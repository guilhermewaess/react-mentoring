import * as React from 'react';
import { Jumbotron } from 'reactstrap';
import './Header.scss';

export class Header extends React.Component {
  public render() {
    return (
      <Jumbotron fluid={true} className="movies-header">
          <h1>TESTE</h1>
      </Jumbotron>
    );
  }
}
