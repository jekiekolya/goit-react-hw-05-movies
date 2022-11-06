const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '45b0d9a735c6cd370fbf9bc7890ca93c';

export async function fetchTrending() {
  try {
    const response = await fetch(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );

    const trendList = await response.json();
    return trendList;
  } catch (error) {
    return error;
  }
}

export async function fetchSearchMovies(searchQuery, searchPage) {
  try {
    const response = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${searchPage}&include_adult=false`
    );

    const searchList = await response.json();
    return searchList;
  } catch (error) {
    return error;
  }
}

export async function fetchMovieDetails(movie_id) {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );

    const movieDetails = await response.json();
    return movieDetails;
  } catch (error) {
    return error;
  }
}

export async function fetchMovieCredits(movie_id) {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
    );

    const movieCredits = await response.json();
    return movieCredits;
  } catch (error) {
    return error;
  }
}

export async function fetchMovieReviews(movie_id, reviewsPage) {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=${reviewsPage}`
    );

    const movieReviews = await response.json();
    return movieReviews;
  } catch (error) {
    return error;
  }
}
