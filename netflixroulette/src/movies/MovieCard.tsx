import * as React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';

export default (props: any) => (
  <Card>
    <CardImg
      top={true}
      width="100%"
      height="400px"
      src={props.movie.poster_path}
      alt="Movie Image"
    />
    <CardBody>
      <CardTitle>{props.movie.title}</CardTitle>
      <CardSubtitle>{props.movie.genres}</CardSubtitle>
    </CardBody>
  </Card>
);
