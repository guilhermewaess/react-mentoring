import * as React from 'react';
import { Col, Row } from 'reactstrap';
import MovieCard from './MovieCard';

interface IProps {
  movies: any[];
}

const NoFilmsFound = () => <h2>No films found</h2>;

export class MoviesList extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  
  public render() {
    if (!this.props.movies.length) {
      return <NoFilmsFound />;
    }
    return (
      <Row>
        {this.props.movies.map((movie: any, index) => (
          <Col xs={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    );
  }
}
