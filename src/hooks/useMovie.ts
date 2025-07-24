import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../services/movieService';
import type { FetchMoviesResponse } from '../services/movieService';

export const useMovies = (query: string, page: number) => {
  return useQuery<FetchMoviesResponse>({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    placeholderData: previousData => previousData,
    enabled: query !== '',
  });
};
