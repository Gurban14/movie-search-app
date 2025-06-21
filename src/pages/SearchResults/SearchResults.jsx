import { useParams } from 'react-router-dom';
import { useSearchMovies } from '../../hooks/useMovies';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './SearchResults.module.css';

function SearchResults() {
  const { query } = useParams();
  const { data: movies, isLoading, error } = useSearchMovies(query);

  if (movies) {
    console.log('Search results:', movies);
  }

  return (
    <div className={`${styles.searchResults} container mx-auto px-4 bg-white dark:bg-gray-900 fade-in`}>
      {isLoading && <div className="spinner my-8"></div>}
      {error && <p className="text-center text-red-500 text-xl">Ошибка: {error.message}</p>}
      {!isLoading && !movies?.length && (
        <p className="text-center text-xl text-gray-900 dark:text-white">Ничего не найдено для "{query}"</p>
      )}
      {movies?.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-dark">
            Результаты поиска для "{query}"
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchResults;