import * as React from 'react';
import { Container } from 'reactstrap';
import { FilterResults } from './../movies/FilterResults';
import { Header } from './../movies/Header';
import { MoviesList } from './../movies/MoviesList';

export default () => {
  return (
    <div>
      <Header />
      <FilterResults />
      <Container fluid={true}>
        <MoviesList />
      </Container>
    </div>
  );
};
