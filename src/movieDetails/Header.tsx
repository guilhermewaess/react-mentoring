import * as React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import './Header.scss';

export default (props: { movie: any }) => {
  return (
    <Container fluid={true} className="movie-details-header">
      <Row className="h-100">
        <Col xs={3}>
          <img
            src={props.movie.poster_path}
            className="rounded mx-auto d-block p-10"
            alt="poster"
          />
        </Col>
        <Col xs={8} className="align-self-center">
          <Card body={true} className="movie-detail-data text-white border-0">
            <CardTitle className="mb-0">
              {props.movie.title}{' '}
              <Badge color="secondary">Score: {props.movie.vote_count}</Badge>
            </CardTitle>
            <h6 className="movie-release-date">{props.movie.release_date}</h6>
            <CardText>{props.movie.overview}</CardText>
          </Card>
        </Col>
        <Col xs={1}>
          <Link to="/">
            <Button
              outline={true}
              className="search-button 
                         mt-1"
            >
              Search
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
