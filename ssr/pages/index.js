import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import React from 'react'
import {connect} from 'react-redux'
import MoviesContainer from '../containers/MoviesContainer';
import './_app.scss';

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req

    return {}
  }

  render () {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <MoviesContainer></MoviesContainer>
      </div>
    )
  }
}

export default connect()(Index)