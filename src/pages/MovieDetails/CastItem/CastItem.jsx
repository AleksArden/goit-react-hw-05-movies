import { IMAGE_URL } from 'constans/ImageURL';
import css from './CastItem.module.css';

export const CastItem = ({ name, character, image }) => {
  if (!image) return;
  image = `${IMAGE_URL}` + image;
  return (
    <li>
      <img className={css.image} src={image} alt="Actor" />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
