import * as React from 'react';
import { Container } from 'reactstrap';
import { Header } from './../movies/Header';
import { MoviesList } from './../movies/MoviesList';

export default () => {
  return (
    <div>
      <Header />
      <Container fluid={true}>
        <MoviesList />
      </Container>
    </div>
  );
};
