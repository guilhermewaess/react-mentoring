// import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';
import './_app.scss';
import Router from 'next/router';

class Index extends React.Component {
  static getInitialProps(props) {
    const isServer = !!props.req;
    console.log(props);
    return {};
  }

  componentDidMount() {
    Router.push('/movies');
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default connect()(Index);
