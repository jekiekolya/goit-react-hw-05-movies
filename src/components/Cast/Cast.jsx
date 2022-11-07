import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'api/fetch-data';

import { List, Img, Item } from './Cast.styled';
import { useState, useEffect } from 'react';

import photo_Pattern from '../../images/photo_Pattern.jpg';
import { Box } from 'components/Box';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId).then(r => setCast(r.cast));
  }, [movieId]);

  return (
    cast && (
      <List>
        {cast.map(item => (
          <Item key={item.id}>
            <Img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : photo_Pattern
              }
              alt={item.name}
            />
            <p>{item.name}</p>
            <Box display="flex" flexDirection="column" alignItems="center">
              <p>Character:</p>
              <p>{item.character}</p>
            </Box>
          </Item>
        ))}
      </List>
    )
  );
}
