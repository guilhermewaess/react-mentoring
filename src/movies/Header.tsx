import * as React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import './Header.scss';
import SearchBy from './SearchBy';

const SearchInput = (props: any) => (
  <div>
    <label className="mb-1 font-weight-bold">Find your movie</label>
    <div className="shadow-lg search-input">
      <input
        data-filter-field="search"
        onChange={props.handleFilterChange}
        className="w-100
                border-0
                rounded"
        type="text"
        placeholder="Search your movie"
      />
    </div>
  </div>
);

export default (props: any) => {
  return (
    <Container fluid={true} className="movies-header">
      <div className="text-white-50">Netflixroulette</div>
      <Row className="h-100">
        <Col
          xs={{ offset: 2, size: 8 }}
          className="align-self-center text-white"
        >
          <form onSubmit={props.onSearch}>
            <SearchInput handleFilterChange={props.handleFilterChange} />
            <SearchBy
              filter={props.filter}
              handleFilterChange={props.handleFilterChange}
            />
            <Button
              outline={true}
              className="search-button 
                         mt-1
                         float-right"
            >
              Search
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
