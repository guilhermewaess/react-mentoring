import * as React from 'react';
import { Container, Row } from 'reactstrap';

interface IProps {
  movies: any[];
}

const MoviesFound = (props: IProps) => {
  return <div>{props.movies.length} Movies found</div>;
};

const SortBy = () => (
  <div>
    Sort by:
    <select name="" id="">
      <option>Release</option>
    </select>
  </div>
);

export default class FilterResults extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <Container>
        <Row className="justify-content-between pt-2 pb-2">
          <MoviesFound movies={this.props.movies} />
          <SortBy />
        </Row>
      </Container>
    );
  }
}
