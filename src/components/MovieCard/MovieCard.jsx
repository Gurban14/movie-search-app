import { Link } from 'react-router-dom';
import { memo } from 'react';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : '/placeholder.jpg';

  if (!movie.poster_path) {
    console.log(`No poster_path for movie: ${movie.title} (ID: ${movie.id})`);
  }

  return (
    <Link to={`/movies/${movie.id}`} className={`${styles.movieCard} block relative`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <img src={imageUrl} alt={movie.title} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-primary bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold opacity-0 hover:opacity-100 transition-opacity">Подробнее</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate text-gray-900 dark:text-white">{movie.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default memo(MovieCard);