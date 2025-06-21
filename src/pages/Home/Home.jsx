import { usePopularMovies } from '../../hooks/useMovies';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Home.module.css';

function Home() {
  const { data: movies, isLoading, error } = usePopularMovies();

  return (
    <div className={`${styles.home} bg-white dark:bg-gray-900 fade-in`}>
      <div className="relative bg-gradient-to-r from-primary to-red-700 text-white py-16 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-pulse">Добро пожаловать в КиноПоиск</h1>
          <p className="text-lg">Ищите фильмы, смотрите новинки, наслаждайтесь!</p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {isLoading && <div className="spinner my-8"></div>}
        {error && <p className="text-center text-red-500 text-xl">Ошибка: {error.message}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;