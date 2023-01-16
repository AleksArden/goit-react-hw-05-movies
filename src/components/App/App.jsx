import { Routes, Route, Link } from 'react-router-dom';
import { Home } from 'pages/Home';

import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <Link className={css.link} to="/">
            Home
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
      </Routes>
    </div>
  );
};
