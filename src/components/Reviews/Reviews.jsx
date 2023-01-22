import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/Movies.services';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async query => {
      const data = await fetchReviewsById(query);
      onResolve(data);
    };
    getReviews(movieId);
  }, [movieId]);
  const onResolve = data => {
    const dataReviews = data.map(({ id, author, content }) => ({
      id,
      author,
      content,
    }));
    setReviews(dataReviews);
  };

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
