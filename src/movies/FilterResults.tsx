import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';

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
];

const orderOptions = [
  'asc',
  'desc'
]

const MoviesFound = (props: IProps) => {
  return <Col xs={{ size: 1, offset: 1 }}> {props.movies.length} Movies found</ Col>;
};

const SortBy = (props: any) => (
  <Col xs="auto">
    Sort by:{' '}
    <select 
      id="sort-by-select"
      className="rounded"
      data-filter-field="sortBy"
      onChange={props.onFilterChange}
      value={props.filter.sortBy}>
      {sortOptions.map((option: string, index: number) => (
        <option key={`${option}-${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  </Col>
);

const OrderBy = (props: any) => (
  <Col xs="auto">
    Order by:{' '}
    <select
      className="rounded"
      id="order-by-select"
      data-filter-field="sortOrder"
      onChange={props.onFilterChange}
      value={props.filter.orderBy}>
      {orderOptions.map((option: string, index: number) => (
        <option key={`${option}-${index}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  </Col>
)

export default (props: any) =>
  (<Container fluid={true}>
    <Row className="pt-2 pb-2">
      <MoviesFound movies={props.movies} />
      <Col xs="7" />
      <SortBy filter={props.filter} onFilterChange={props.onFilterChange} />
      <OrderBy filter={props.filter} onFilterChange={props.onFilterChange} />
    </Row>
  </Container>)
