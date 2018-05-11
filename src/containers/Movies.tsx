import * as React from 'react';
import { connect } from 'react-redux';
import { IMovie } from '../core/interfaces';
import MoviesList from './../core/MoviesList';
import { getMovies } from './../core/store/actions';
import FilterResults from './../movies/FilterResults';
import Header from './../movies/Header';

interface IState {
  movies: IMovie[];
}

const mapStateToProps = (state: any) => {
  return {
    movies: state.movies
  };
};

const mapActionsToProps = (dispatch: any) => {
  return {
    loadAllMovies: () => dispatch(getMovies())
  }
}

class MoviesContainer extends React.Component<any> {
  public state: IState;

  public componentDidMount() {
    this.props.loadAllMovies();
  }

  public render() {
    return (
      <div className="w-100 h-100">
        <Header />
        <FilterResults movies={this.props.movies} />
        <MoviesList movies={this.props.movies} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MoviesContainer);