import { useEffect } from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { Box } from 'components/Box';
import { fetchTrending } from '../../api/fetch-data';
import { useState } from 'react';

import { LinkStyled, Item, Title, List } from './TrendList.styled';

export default function TrendList() {
  const [trendList, setTrendList] = useState(null);

  useEffect(() => {
    fetchTrending().then(r => {
      setTrendList(r.results);
    });
  }, []);

  return (
    <Box p={30}>
      <Title>Trending today</Title>
      {trendList && (
        <List>
          {trendList.map(movie => (
            <Item key={movie.id}>
              <BiCameraMovie color="#dc758a" />
              <LinkStyled to={`movies/${movie.id}`}>
                {movie.title || movie.name}
              </LinkStyled>
            </Item>
          ))}
        </List>
      )}
    </Box>
  );
}
