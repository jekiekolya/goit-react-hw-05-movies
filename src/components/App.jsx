// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { ThreeDots } from 'react-loader-spinner';

import { Route, Routes } from 'react-router-dom';
import { Header, Home, MovieDetails, NotFound } from './index';

// import { Box } from './Box';

import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
