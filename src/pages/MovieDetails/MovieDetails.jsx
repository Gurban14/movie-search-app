import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../../hooks/useMovies';
import styles from './MovieDetails.module.css';

function MovieDetails() {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useMovieDetails(id);

  if (isLoading) return <div className="spinner my-8"></div>;
  if (error) return <p className="text-center text-red-500 text-xl">Ошибка: {error.message}</p>;

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.jpg';

  return (
    <div className={`${styles.movieDetails} max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md fade-in`}>
      <div className="flex flex-col md:flex-row gap-8 border-l-4 border-primary dark:border-primary-dark pl-4">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-sm"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{movie.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{movie.overview}</p>
          <p className="mb-2">
            <span className="font-semibold">Дата выхода:</span> {movie.release_date || 'N/A'}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Рейтинг:</span> {movie.vote_average}/10
          </p>
          <p className="mb-2">
            <span className="font-semibold">Жанры:</span>{' '}
            {movie.genres?.map((g) => g.name).join(', ') || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;