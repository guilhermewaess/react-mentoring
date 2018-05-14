import { parse, stringify } from 'query-string';
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
  public historySubscription: any;

  constructor(props: any) {
    super(props);
    this.state = {
      filter: {
        search: '',
        searchBy: 'title',
      },
    };
    this.historySubscription = this.props.history.listen(this.search.bind(this));
  }

  public componentDidMount() {
    const queryParams = parse(this.props.location.search);
    this.updateFilter(queryParams);
  }

  public componentWillUnmount() {
    this.historySubscription();
  }

  public search() {
    this.props.getMovies(this.state.filter);
  }

  public onSearchHandler(event: Event) {
    event.preventDefault();
    this.updateFilter();
  }

  public onFilterChangeHandler(event: any) {
    event.stopPropagation();
    const filter = {
      ...this.state.filter,
      [event.target.dataset.filterField]: event.target.value,
    };
    this.setState({ filter });
  }

  public render() {
    const onSearch = this.onSearchHandler.bind(this);
    const onFilterChange = this.onFilterChangeHandler.bind(this);
    return (
      <div className="w-100 h-100">
        {JSON.stringify(this.state)}
        <Header
          handleFilterChange={onFilterChange}
          onSearch={onSearch}
          filter={this.state.filter}
        />
        <FilterResults movies={this.props.movies} />
        <MoviesList movies={this.props.movies} />
      </div>
    );
  }

  private updateFilter(queryParams?: any) {
    const filter = {
      ...this.state.filter,
      ...queryParams,
    };

    this.setState({ filter }, this.updateQueryStringParams);
  }

  private updateQueryStringParams() {
    this.props.history.push({
      pathname: '/movies',
      search: stringify(this.state.filter)
    })
  }
}

export default connect(mapStateToProps, mapActionsToProps)(MoviesContainer);
