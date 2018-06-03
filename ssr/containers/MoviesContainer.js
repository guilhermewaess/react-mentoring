import { parse, stringify } from 'query-string';
import * as React from 'react';
import { connect } from 'react-redux';
import { getMovies } from './../store/actions';
import MoviesList from './../components/MoviesList';
import Header from './../components/MoviesHeader';
import FilterResults from './../components/FilterResults';
import Router from 'next/router'




class MoviesContainer extends React.Component {
  state;
  // historySubscription;

  constructor(props) {
    super(props);
    console.log('eita', props)
    this.state = {
      // filter: {
      //   search: '',
      //   searchBy: 'title',
      //   sortBy: 'release_date',
      //   sortOrder: 'asc',
      // },
      filter: props.filter,
    };
    // this.historySubscription = this.props.history.listen(
    //   this.search.bind(this),
    // );
  }

  componentDidMount() {
    const queryParams = parse(this.state.filter);
    this.updateFilter(queryParams);
  }

  // componentWillUnmount() {
  //   this.historySubscription();
  // }

  search() {
    this.props.getMovies(this.state.filter);
  }

  onSearchHandler(event) {
    event.preventDefault();
    this.updateFilter();
  }

  onFilterChangeHandler(shouldSearch, event) {
    event.stopPropagation();
    const filter = {
      ...this.state.filter,
      [event.target.dataset.filterField]: event.target.value,
    };
    this.setState({ filter }, () => {
      if (shouldSearch) {
        this.updateFilter();
      }
    });
  }

  updateFilter(queryParams) {
    const filter = {
      ...this.state.filter,
      ...queryParams,
    };

    this.setState({ filter }, this.updateQueryStringParams);
  }

  updateQueryStringParams() {
    console.log('aqui', this.props);
    // this.props.url.push({
    //   pathname: '/movies',
    //   search: stringify(this.state.filter),
    // });
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

export default connect(mapStateToProps, mapActionsToProps)(MoviesContainer);
