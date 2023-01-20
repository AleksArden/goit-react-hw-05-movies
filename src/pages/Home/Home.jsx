import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/Movies.services';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      onResolve(data);
    };
    getMovies();
  }, []);
  const onResolve = data => {
    const movieTitles = data.map(({ id, original_title }) => ({
      id,
      original_title,
    }));
    setMovies(movieTitles);
  };
  return (
    <div>
      <TrendingMoviesList movies={movies} />
    </div>
  );
};
