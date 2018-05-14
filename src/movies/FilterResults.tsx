import * as React from 'react';
import { Container, Row } from 'reactstrap';

interface IProps {
  movies: any[];
}

const sortOptions = [
  'id',
  'title',
  'tagline',
  'vote_average',
  'vote_count',
  'release_date',
  'poster_path',
  'overview',
  'budget',
  'revenue',
]

const MoviesFound = (props: IProps) => {
  return <div>{props.movies.length} Movies found</div>;
};

const SortBy = (props: any) => (
  <div>
    Sort by:
    <select id="sort-by-select"
            data-filter-field="sortBy"
            onChange={props.onFilterChange}
            value={props.filter.sortBy}>
      {sortOptions.map((option: string, index: number) => (
        <option key={`${option}-${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default (props: any) =>
  (<Container>
    <Row className="justify-content-between pt-2 pb-2">
      <MoviesFound movies={props.movies} />
      <SortBy filter={props.filter} onFilterChange={props.onFilterChange} />
    </Row>
  </Container>)
