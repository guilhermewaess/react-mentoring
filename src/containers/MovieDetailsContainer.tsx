import * as React from 'react';
import { connect } from 'react-redux';
import { IMovie } from '../core/interfaces';
import { getMovies } from '../core/store/actions';
import Header from '../movieDetails/Header';
import { getMovieById } from '../services/moviesService';
import MoviesList from './../core/MoviesList';
import FilmsBy from './FilmsBy';

const mapStateToProps = (state: any) => {
  return {
    movies: state.movies,
  };
};

const mapActionsToProps = (dispatch: any) => {
  return {
    getMovies: (filter: any) => dispatch(getMovies(filter)),
  };
};

class MovieDetails extends React.Component<any, any> {
  public state: any;
  public historySubscription: any;

  constructor(props: any) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  public async componentWillMount() {
    const urlParamId = Number(this.props.match.params.id);

    if (this.props.movies.length) {
      this.updateMovieFromStore(urlParamId);
    } else {
      try {
        const movie = await getMovieById(urlParamId);
        this.setState({ movie }, this.getMoviesByGenres);
      } catch (error) {
        /* istanbul ignore next */ 
        console.log(error); //tslint:disable-line
      }
    }
  }

  public getMoviesByGenres() {
    const filter = {
      search: this.state.movie.genres[0],
      searchBy: 'genres',
      sortBy: 'release_date',
      sortOrder: 'asc',
    };
    this.props.getMovies(filter);
  }

  public componentWillReceiveProps(props: any) {
    const urlParamId = Number(props.match.params.id);
    if (this.state.movie.id !== urlParamId) {
      this.updateMovieFromStore(urlParamId);
      this.getMoviesByGenres();
    }
  }

  public getMovieFromStore(id: number | string) {
    return this.props.movies.find((movie: IMovie) => movie.id === Number(id));
  }

  public updateMovieFromStore(movieId: number) {
    const movie = this.getMovieFromStore(movieId);    
    this.setState({ movie });
  }

  public render() {
    if (this.state.movie) {
      return (
        <div className="w-100 h-100">
          <Header movie={this.state.movie} />
          <FilmsBy movie={this.state.movie} />
          <MoviesList movies={this.props.movies} />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default connect<any, any, any, any>(mapStateToProps, mapActionsToProps)(
  MovieDetails,
);
