import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { IMovie } from './interfaces';
import MovieCard from './MovieCard';

const NoFilmsFound = () => <h2>No films found</h2>;

export default ({ movies, match }: any) => {
  if (!movies.length) {
    return <NoFilmsFound />;
  }
  return (
    <Container fluid={true}>
      <Row>
        {movies.map((movie: IMovie) => (
          <Col xs={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
