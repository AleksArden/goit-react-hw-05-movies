import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'pages/MovieDetails/CastList/CastList';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="movies" element={<Movies />} />
      </Routes>
    </Layout>
  );
};
