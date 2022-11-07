import { fetchMovieReviews } from 'api/fetch-data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, ResultTitle } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId, 1).then(r => {
      setReviews(r.results);
    });
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <List>
      {reviews.map(item => (
        <Item key={item.id}>
          <h3>Author: {item.author}</h3>
          <p>{item.content}</p>
        </Item>
      ))}
    </List>
  ) : (
    <ResultTitle>We don't have any reviews for this movie.</ResultTitle>
  );
}
