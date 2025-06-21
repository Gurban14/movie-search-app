import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    Accept: 'application/json'
  }
});

export const fetchPopularMovies = async () => {
  try {
    const response = await api.get('/movie/popular');
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get('/search/movie', {
      params: { query }
    });
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to search movies');
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};