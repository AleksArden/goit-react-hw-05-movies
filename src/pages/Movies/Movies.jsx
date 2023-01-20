import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/Movies.services';

import css from './Movies.module.css';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  // const params = useParams();
  // console.log(params);

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setSearch(inputValue.trim());
    setMovies([]);
    setInputValue('');
  };
  useEffect(() => {
    const getMovies = async (query = '') => {
      const data = await fetchSearchMovies(query);
      onResolve(data);
    };
    if (search === '') return;
    getMovies(search);
  }, [search]);

  const onResolve = data => {
    const moviesName = data.map(({ id, original_title }) => ({
      id,
      original_title,
    }));
    setMovies(moviesName);
  };

  return (
    <div>
      {movies.length === 0 ? (
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={inputValue}
          />
          <button type="submit">Search</button>
        </form>
      ) : (
        <div to={`?query=${search}`}>
          <ul>
            {movies.map(({ id, original_title }) => (
              <li key={id}>
                <Link>{original_title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
