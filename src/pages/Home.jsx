import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/Movies.services';

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
    const moviesName = data.map(({ id, original_title }) => ({
      id,
      original_title,
    }));
    setMovies(moviesName);
  };
  return (
    <div>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <p>{original_title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
