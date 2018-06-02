import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { IMovie } from './interfaces';
import MovieCard from './MovieCard';

interface IProps {
  movies: IMovie[];
}

const NoFilmsFound = () => <h2>No films found</h2>;

export default ({ movies }: IProps) => {
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
