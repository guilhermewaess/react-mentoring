import * as React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './../store/actions';
import { getMovieById } from './../services/moviesService';
import Header from './../components/MovieDetailsHeader';
import MoviesList from './../components/MoviesList';
import FilmsBy from './../components/FilmsBy';

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

class MovieDetails extends React.Component {
  state;
  historySubscription;

  static getInitialProps(props) {
    // const filter = { ...defaultFilter, ...query };
    // return { filter };
    console.log(props);
    return { a: 1 };
  }

  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  async componentWillMount() {
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
    const urlParamId = Number(props.match.params.id);
    if (this.state.movie.id !== urlParamId) {
      this.updateMovieFromStore(urlParamId);
      this.getMoviesByGenres();
    }
  }

  getMovieFromStore(id) {
    return this.props.movies.find(movie => movie.id === Number(id));
  }

  updateMovieFromStore(movieId) {
    const movie = this.getMovieFromStore(movieId);
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
