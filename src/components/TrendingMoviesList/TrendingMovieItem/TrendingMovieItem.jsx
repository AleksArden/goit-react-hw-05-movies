import { Link } from 'react-router-dom';

export const TrendingMovieItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`movies/${id}`}>{title}</Link>
    </li>
  );
};
