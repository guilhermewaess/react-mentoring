import * as React from 'react';
import './Header.scss';

export class Header extends React.Component {
  public render() {
    return (
      <div className=' movies-header'>
        <div>Netflixroulette</div>
        <div className="d-flex flex-column justify-content-center">
          <div className='align-self-center'>SIR</div>
        </div>
      </div>
    );
  }
}
