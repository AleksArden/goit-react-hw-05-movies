import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/Movies.services';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { STATUS } from 'constans/Status';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    const getMovies = async () => {
      setStatus(STATUS.loading);
      try {
        const data = await fetchTrendingMovies();
        onResolve(data);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };
    getMovies();
  }, []);
  const onResolve = data => {
    const movieTitles = data.map(({ id, original_title }) => ({
      id,
      title: original_title,
    }));
    setMovies(movieTitles);
    setStatus(STATUS.success);
  };
  return (
    <>
      {status === STATUS.error && <h2>NOT FOUND</h2>}
      {status === STATUS.loading && (
        <>
          <h2>Trending today</h2>
          <p>Loading...</p>
        </>
      )}
      {status === STATUS.success && (
        <>
          <h2>Trending today</h2>
          <TrendingMovies movies={movies} />
        </>
      )}
    </>
  );
};
export default HomePage;
