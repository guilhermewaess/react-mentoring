import * as React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import './Header.scss';

const SearchInput = () => (
  <div>
    <label className="mb-1 font-weight-bold">Find your movie</label>
    <div className="shadow-lg search-input">
      <input
        className="w-100
                border-0
                rounded"
        type="text"
        placeholder="Search your movie"
      />
    </div>
  </div>
);

export class Header extends React.Component {
  public render() {
    return (
      <Container fluid={true} className="movies-header">
        <div className="text-white-50">Netflixroulette</div>
        <Row className="h-100">
          <Col
            xs={{ offset: 2, size: 8 }}
            className="align-self-center text-white"
          >
            <SearchInput />
            <Button
              outline={true}
              className="search-button 
                         mt-1
                         w-20
                         float-right"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
