import { Link } from 'react-router-dom';

import css from './AdditionalInformation.module.css';

export const AdditionalInformation = () => {
  return (
    <div className={css.thumb}>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
