import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'services/Movies.services';
import { CastItem } from '../CastItem/CastItem';

export const Cast = () => {
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
        <CastItem key={id} name={name} character={character} image={image} />
      ))}
    </ul>
  );
};
