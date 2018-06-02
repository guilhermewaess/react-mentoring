import * as React from 'react';
import { Button, ButtonGroup, Label } from 'reactstrap';
// import './SearchBy.scss';

export default class SearchBy extends React.Component {
  isActive(currentSelected) {
    if (this.props.filter.searchBy === currentSelected) {
      return 'active';
    }
    return '';
  }

  render() {
    return (
      <div className="search-by mt-2 float-left">
        <Label>Search By: </Label>
        <ButtonGroup className="ml-2" size="sm">
          <Button
            data-filter-field="searchBy"
            value="title"
            className={`search-by-button ${this.isActive('title')}`}
            onClick={this.props.handleFilterChange}
          >
            TITLE
          </Button>
          <Button
            data-filter-field="searchBy"
            value="genres"
            className={`search-by-button ${this.isActive('genres')}`}
            onClick={this.props.handleFilterChange}
          >
            GENRE
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
