import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { MdOutlineReviews } from 'react-icons/md';

import { Box } from 'components/Box';

import { fetchMovieDetails } from 'api/fetch-data';

import {
  GoBackBox,
  GoBackLink,
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

  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    fetchMovieDetails(movieId).then(r => {
      setMovieDetails(r);
    });
  }, [movieId]);

  const genres = movieDetails?.genres?.map(item => {
    return item.name;
  });

  const voteAverage = (movieDetails?.vote_average * 10).toFixed(0);

  return (
    <Box p={20}>
      <GoBackBox>
        <AiOutlineArrowLeft />
        <GoBackLink to={location.state?.from ?? '/'}>Go Back</GoBackLink>
      </GoBackBox>
      {movieDetails && !movieDetails.success && movieDetails.status_message && (
        <TitleMovie>{movieDetails.status_message}</TitleMovie>
      )}
      {movieDetails?.title && (
        <>
          <SectionAbout>
            <Img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <Wrapper>
              <TitleMovie>{movieDetails.title}</TitleMovie>
              <p>User Score: {voteAverage}%</p>
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
