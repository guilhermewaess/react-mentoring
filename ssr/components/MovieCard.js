import * as React from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';
import './styles/MovieCard.scss';
import Link from 'next/link';

const MovieGenres = ({ genres }) => (
  <div>
    {genres.map((genre, index) => (
      <Badge key={index} color="secondary mr-1">
        {genre}
      </Badge>
    ))}
  </div>
);

export default ({ movie }) => (
  <div className="movie-card">
    <Link href={{ pathname: '/movieDetails', query: { movie: movie.id } }}>
      <a>
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
      </a>
    </Link>
  </div>
);
