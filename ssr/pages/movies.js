import { parse, stringify } from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './../store/actions';
import MoviesList from './../components/MoviesList';
import Header from './../components/MoviesHeader';
import FilterResults from './../components/FilterResults';
import Router from 'next/router';
import * as R from 'ramda';

const defaultFilter = {
  search: '',
  searchBy: 'title',
  sortBy: 'release_date',
  sortOrder: 'asc',
};

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

class Movies extends React.Component {
  static getInitialProps({ query, url }) {
    console.log('getInitialProps');
    const filter = { ...defaultFilter, ...query };
    return { filter };
  }

  constructor(props) {
    super(props);
    this.state = {
      filter: props.filter,
    };
    Router.onBeforeHistoryChange = this.search.bind(this);
  }

  componentDidMount() {
    this.updateQueryStringParams();
  }

  componentWillReceiveProps(props, props2) {
    if (!R.equals(Router.router.query, this.state.filter)) {
      this.sincronizeStateWithQueryParams();
    }
  }

  componentWillUnmount() {
    Router.onBeforeHistoryChange = null;
  }

  sincronizeStateWithQueryParams() {
    const filter = Router.router.query;
    this.setState({ filter }, this.updateQueryStringParams);
  }

  search() {
    this.props.getMovies(this.state.filter);
  }

  onSearchHandler(event) {
    event.preventDefault();
    this.updateQueryStringParams();
  }

  onFilterChangeHandler(shouldSearch, event) {
    event.stopPropagation();
    const filter = {
      ...this.state.filter,
      [event.target.dataset.filterField]: event.target.value,
    };
    this.setState({ filter }, () => {
      if (shouldSearch) {
        this.updateQueryStringParams();
      }
    });
  }

  updateQueryStringParams() {
    const href = `/movies?${stringify(this.state.filter)}`;
    const as = href;
    Router.push(href, as, { shallow: true });
  }

  render() {
    const onSearch = this.onSearchHandler.bind(this);
    const onFilterChange = this.onFilterChangeHandler.bind(this, false);
    const onSortOrderByChange = this.onFilterChangeHandler.bind(this, true);
    return (
      <div className="w-100 h-100">
        {JSON.stringify(this.state)}
        <Header
          handleFilterChange={onFilterChange}
          onSearch={onSearch}
          filter={this.state.filter}
        />
        <FilterResults
          movies={this.props.movies}
          onFilterChange={onSortOrderByChange}
          filter={this.state.filter}
        />
        <MoviesList movies={this.props.movies} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Movies);
