import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/Movies.services';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

const HomePage = () => {
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
      title: original_title,
    }));
    setMovies(movieTitles);
  };
  return (
    <div>
      <TrendingMovies movies={movies} />
    </div>
  );
};
export default HomePage;
