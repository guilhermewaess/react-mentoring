import * as React from 'react';
import { Header } from './../movies/Header';
import { MoviesList } from './../movies/MoviesList';

export default () => {
  return (
    <div>
      <Header />
      <MoviesList />
    </div>
  );
};
