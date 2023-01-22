import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from 'constans/ImageURL';
import { fetchCastById } from 'services/Movies.services';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async query => {
      const data = await fetchCastById(query);
      onResolve(data);
    };
    getCast(movieId);
  }, [movieId]);

  const onResolve = data => {
    const dataCast = data.map(({ cast_id, character, name, profile_path }) => ({
      id: cast_id,
      character,
      name,
      image: profile_path,
    }));

    setCast(dataCast);
  };
  return (
    <ul>
      {cast.map(({ id, character, name, image }) => (
        <li key={id}>
          {image && <img src={`${IMAGE_URL}` + image} alt={name} width="150" />}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
