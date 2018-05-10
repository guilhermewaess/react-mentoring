import * as React from 'react';
import { IMovie } from '../core/interfaces';
import MoviesList from './../core/MoviesList';
import FilterResults from './../movies/FilterResults';
import Header from './../movies/Header';

interface IState {
  movies: IMovie[];
}

export default class MoviesContainer extends React.Component {
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
    return (
      <div className="w-100 h-100">
        <Header />
        <FilterResults movies={this.state.movies} />
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}
