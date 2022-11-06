import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi';
import { MdOutlineReviews } from 'react-icons/md';

import { Box } from 'components/Box';

import { fetchMovieDetails } from 'api/fetch-data';

import {
  Img,
  SectionAbout,
  ListGenres,
  TitleMovie,
  Wrapper,
  LinkStyled,
  ListInfo,
  ItemInfo,
  SectionInfo,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(r => {
      console.log(r);
      setMovieDetails(r);
    });
  }, [movieId]);

  const genres = movieDetails?.genres.map(item => {
    return item.name;
  });

  return (
    <Box p={20}>
      {movieDetails && (
        <>
          <SectionAbout>
            <Img
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <Wrapper>
              <TitleMovie>{movieDetails.title}</TitleMovie>
              <p>User Score: 74%</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <ListGenres>
                {genres.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ListGenres>
            </Wrapper>
          </SectionAbout>
          <SectionInfo>
            <h2>Additional information</h2>
            <ListInfo>
              <ItemInfo>
                <HiUserGroup color="#dc758a" />
                <LinkStyled to="cast">Cast</LinkStyled>
              </ItemInfo>
              <ItemInfo>
                <MdOutlineReviews color="#dc758a" />
                <LinkStyled to="reviews">Reviews</LinkStyled>
              </ItemInfo>
            </ListInfo>
          </SectionInfo>
        </>
      )}
    </Box>
  );
}
