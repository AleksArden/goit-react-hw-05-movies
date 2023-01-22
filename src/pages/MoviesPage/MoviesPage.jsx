import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Form, Input } from './MoviesPage.styled';
import { fetchSearchMovies } from 'services/Movies.services';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchName = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.search;

    setMovies([]);
    setSearchParams({ query: value });
  };
  useEffect(() => {
    if (!searchName) return;
    if (searchName === '') return;
    const getMovies = async () => {
      const data = await fetchSearchMovies(searchName);
      onResolve(data);
    };
    getMovies();
  }, [searchName]);

  const onResolve = data => {
    const moviesName = data.map(({ id, original_title }) => ({
      id,
      title: original_title,
    }));
    setMovies(moviesName);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" autoComplete="off" name="search" />
        <button type="submit">Search</button>
      </Form>

      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MoviesPage;
