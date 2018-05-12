import * as React from 'react';
import { connect } from 'react-redux';
import MoviesList from './../core/MoviesList';
import { getMovies } from './../core/store/actions';
import FilterResults from './../movies/FilterResults';
import Header from './../movies/Header';

interface IState {
  filter: { search: string; searchBy: string };
}

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

class MoviesContainer extends React.Component<any> {
  public state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      filter: {
        search: '',
        searchBy: 'title',
      },
    };
  }

  public componentDidMount() {
    this.search();
  }

  public handleFilterChange(field: string, event: any) {
    event.stopPropagation();
    const filter = { ...this.state.filter, [field]: event.target.value };
    this.setState({ filter });
  }

  public search(event?: any) {
    console.log(event); //tslint:disable-line
    if (event) {
      event.preventDefault();
    }
    this.props.getMovies(this.state.filter);
  }

  public render() {
    const onSearch = this.search.bind(this);
    return (
      <div className="w-100 h-100">
        {JSON.stringify(this.state)}
        <Header
          handleSearchChange={this.handleFilterChange.bind(this, 'search')}
          onSearch={onSearch}
        />
        <FilterResults movies={this.props.movies} />
        <MoviesList movies={this.props.movies} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MoviesContainer);
