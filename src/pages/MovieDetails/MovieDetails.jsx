import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/Movies.services';
import { AdditionalInformation } from './AdditionalInformation/AdditionalInformation';
import { IMAGE_URL } from 'constans/ImageURL';

import css from './MovieDetails.module.css';
export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async query => {
      const data = await fetchMovieDetailsById(query);
      onResolve(data);
    };
    getMovie(movieId);
  }, [movieId]);
  const onResolve = data => {
    let {
      original_title,
      release_date,
      overview,
      genres,
      poster_path,
      vote_average,
    } = data;
    release_date = new Date(release_date).getFullYear();
    poster_path = `${IMAGE_URL}${poster_path}`;
    vote_average = (vote_average * 10).toFixed(0);
    genres = genres.map(item => item.name).join(' ');
    const dataMovie = {
      original_title,
      release_date,
      overview,
      genres,
      poster_path,
      vote_average,
    };
    setMovie(dataMovie);
  };
  if (!movie) return null;

  return (
    <div>
      <Link to="/">Go back</Link>
      <div className={css.wrapper}>
        <img
          className={css.poster}
          src={movie.poster_path}
          alt="Movie poster"
        />
        <div className={css.content}>
          <h2>
            {movie.original_title} ({movie.release_date})
          </h2>
          <p>User score {movie.vote_average}%</p>
          <b>Overview</b>
          <p>{movie.overview}</p>
          <b>Genres</b>
          <p>{movie.genres}</p>
        </div>
      </div>
      <AdditionalInformation />
      <Outlet />
    </div>
  );
};
