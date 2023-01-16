import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/movie">Movie</Link>
      </nav>
      <Routes>
        <Route path="/movie" element={<div>Movie</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};
