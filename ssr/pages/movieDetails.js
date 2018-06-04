import * as React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './../store/actions';
import { getMovieById } from './../services/moviesService';
import Header from './../components/MovieDetailsHeader';
import MoviesList from './../components/MoviesList';
import FilmsBy from './../components/FilmsBy';
import Router from 'next/router';


const mapStateToProps = state => {
  return {
    movies: state.movies,
  };
};

const mapActionsToProps = dispatch => {
  return {
    getMovies: filter => dispatch(getMovies(filter)),
  };
};

const findMovie = (id, movies) => movies.find(movie => movie.id === Number(id));

class MovieDetails extends React.Component {
  state;
  historySubscription;

  static async getInitialProps({ query, reduxStore }) {
    const moviesFromStore = reduxStore.getState().movies;
    const movieId = query.movie;
    let movie = null;

    if (moviesFromStore.length) {
      movie = findMovie(movieId, moviesFromStore);
    } else {
      try {
        movie = await getMovieById(movieId);
      } catch (error) {
        /* istanbul ignore next */
        console.log(error);
      }
    }

    return { movie };
  }

  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
    };
  }

  async componentWillMount() {
    this.getMoviesByGenres();
  }

  getMoviesByGenres() {
    const filter = {
      search: this.state.movie.genres[0],
      searchBy: 'genres',
      sortBy: 'release_date',
      sortOrder: 'asc',
    };
    this.props.getMovies(filter);
  }

  componentWillReceiveProps(props) {
    const urlParamId = Number(Router.router.query.movie);
    if (this.state.movie.id !== urlParamId) {
      this.updateMovieFromStore(urlParamId);
      this.getMoviesByGenres();
    }
  }

  updateMovieFromStore(movieId) {
    const movie = findMovie(movieId, this.props.movies);
    this.setState({ movie });
  }

  render() {
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

export default connect(mapStateToProps, mapActionsToProps)(MovieDetails);
