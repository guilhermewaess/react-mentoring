import * as React from 'react';
import { Col, Row } from 'reactstrap';
import MovieCard from './MovieCard';

interface IState {
  movies: any[];
}

const NoFilmsFound = () => <h2>No films found</h2>;

export class MoviesList extends React.Component {
  public state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      movies: [
        {
          budget: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          id: 447365,
          overview: "The third film based on Marvel's Guardians of the Galaxy.",
          poster_path:
            'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
          release_date: '2020-05-01',
          revenue: 0,
          runtime: null,
          tagline: '',
          title: 'Guardians of the Galaxy Vol. 3',
          vote_average: 0,
          vote_count: 9,
        },
        {
          budget: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          id: 447366,
          overview: "The third film based on Marvel's Guardians of the Galaxy.",
          poster_path:
            'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
          release_date: '2020-05-01',
          revenue: 0,
          runtime: null,
          tagline: '',
          title: 'Guardians of the Galaxy Vol. 3',
          vote_average: 0,
          vote_count: 9,
        },
        {
          budget: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          id: 447367,
          overview: "The third film based on Marvel's Guardians of the Galaxy.",
          poster_path:
            'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
          release_date: '2020-05-01',
          revenue: 0,
          runtime: null,
          tagline: '',
          title: 'Guardians of the Galaxy Vol. 3',
          vote_average: 0,
          vote_count: 9,
        },
        {
          budget: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          id: 447368,
          overview: "The third film based on Marvel's Guardians of the Galaxy.",
          poster_path:
            'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
          release_date: '2020-05-01',
          revenue: 0,
          runtime: null,
          tagline: '',
          title: 'Guardians of the Galaxy Vol. 3',
          vote_average: 0,
          vote_count: 9,
        },
      ],
    };
  }
  public render() {
    if (!this.state.movies.length) {
      return <NoFilmsFound />;
    }
    return (
      <Row>
        {this.state.movies.map((movie: any, index) => (
          <Col xs={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    );
  }
}
