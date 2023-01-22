import { useState, useEffect, Suspense } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/Movies.services';
import {
  Wrapper,
  Poster,
  Content,
  Thumb,
  Button,
} from './MovieDetailsPage.styled';
import { IMAGE_URL } from 'constans/ImageURL';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async query => {
      const data = await fetchMovieDetailsById(query);
      onResolve(data);
    };
    getMovie(movieId);
  }, [movieId]);
  const onResolve = data => {
    const dataMovie = {
      title: data.original_title,
      releaseDate: new Date(data.release_date).getFullYear(),
      overview: data.overview,
      genres: data.genres.map(item => item.name).join(' '),
      poster: data.poster_path,
      voteAverage: (data.vote_average * 10).toFixed(0),
    };
    setMovie(dataMovie);
  };
  if (!movie) return null;

  const { title, releaseDate, overview, genres, poster, voteAverage } = movie;
  return (
    <>
      <Button type="button" onClick={() => navigate(location?.state?.from)}>
        Go back
      </Button>
      <Wrapper>
        {Poster && (
          <Poster src={`${IMAGE_URL}` + poster} alt={`Poster ${title}`} />
        )}
        <Content>
          <h2>
            {title} ({releaseDate})
          </h2>
          <p>User score {voteAverage}%</p>
          <b>Overview</b>
          <p>{overview}</p>
          <b>Genres</b>
          <p>{genres}</p>
        </Content>
      </Wrapper>
      <Thumb>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </Thumb>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
