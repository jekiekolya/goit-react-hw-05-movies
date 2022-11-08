import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Header } from './index';

import { Container } from './App.styled';

const Home = lazy(() =>
  import('../pages/Home/Home' /* webpackChunkName: "Home" */)
);
const MovieDetails = lazy(() =>
  import(
    '../pages/MovieDetails/MovieDetails' /* webpackChunkName: "MovieDetails" */
  )
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies' /* webpackChunkName: "Movies" */)
);
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "Reviews" */)
);
const NotFound = lazy(() =>
  import('./NotFound/NotFound' /* webpackChunkName: "NotFound" */)
);

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
