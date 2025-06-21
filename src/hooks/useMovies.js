import { useQuery } from '@tanstack/react-query';
import { fetchPopularMovies, searchMovies, fetchMovieDetails } from '../services/api';

export function usePopularMovies() {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
    retry: 1,
    staleTime: 1000 * 60 * 5
  });
}

export function useSearchMovies(query) {
  return useQuery({
    queryKey: ['searchMovies', query],
    queryFn: () => searchMovies(query),
    enabled: !!query,
    retry: 1,
    staleTime: 1000 * 60 * 5
  });
}

export function useMovieDetails(id) {
  return useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
    retry: 1,
    staleTime: 1000 * 60 * 5
  });
}