import { TrendingMovieItem } from './TrendingMovieItem/TrendingMovieItem';

export const TrendingMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <TrendingMovieItem key={id} id={id} title={original_title} />
      ))}
    </ul>
  );
};
