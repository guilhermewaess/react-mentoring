import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';
import './MovieCard.scss';

const MovieGenres = ({ genres }: { genres: string[] }) => (
  <div>
    {genres.map((genre, index) => <Badge key={index} color="secondary mr-1">{genre}</Badge>)}
  </div>
);

export default ({ match, movie }: any) => (
  <div className="movie-card">
    <NavLink to={`movie-details/${movie.id}`}>
      <Card>
        <CardImg
          top={true}
          width="100%"
          height="400px"
          src={movie.poster_path}
          alt="Movie Image"
        />
        <CardBody>
          <CardTitle>{movie.title}</CardTitle>
          <CardSubtitle>
            <MovieGenres genres={movie.genres} />
          </CardSubtitle>
        </CardBody>
      </Card>
    </NavLink>
  </div>
);
