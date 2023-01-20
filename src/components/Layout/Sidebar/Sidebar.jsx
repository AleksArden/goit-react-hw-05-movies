import { Link } from 'react-router-dom';
import css from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <nav className={css.nav}>
      <Link className={css.link} to="/">
        Home
      </Link>
      <Link className={css.link} to="/movies">
        Movies
      </Link>
    </nav>
  );
};
