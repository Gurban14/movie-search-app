import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();
  const { toggleTheme, isDark } = useTheme();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSubmit = (data) => {
    navigate(`/search/${encodeURIComponent(data.query)}`);
    setIsMenuOpen(false); // Close menu on search
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} bg-gradient-to-r from-primary to-primary-dark dark:from-primary-dark dark:to-gray-800 text-white p-4 shadow-lg sticky top-0 z-20 animate-slide-in`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-wide glow">КиноПоиск</Link>
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="p-2 text-white focus:outline-none hover:scale-110 transition-transform"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className={`${styles.navContent} ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-full left-0 right-0 bg-primary dark:bg-primary-dark md:bg-transparent p-4 md:p-0 transition-all duration-300`}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center w-full md:w-auto">
            <div className="relative w-full">
              <input
                {...register('query', {
                  required: 'Введите запрос',
                  maxLength: { value: 100, message: 'Запрос слишком длинный' }
                })}
                type="text"
                placeholder="Поиск фильмов..."
                className={`${styles.inputSearch} p-3 pr-10 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none border-2 border-transparent focus:border-primary dark:focus:border-white shadow-md w-full`}
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              type="submit"
              className="ml-2 p-3 bg-white text-primary dark:text-black dark:bg-primary-dark rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors animate-pulse"
            >
              Найти
            </button>
          </form>
          {errors.query && (
            <p className="text-yellow-300 text-sm mt-1 w-full">{errors.query.message}</p>
          )}
          <button
            onClick={toggleTheme}
            className="p-3 bg-white dark:bg-gray-700 text-primary dark:text-white rounded-lg hover:scale-105 transition-transform flex items-center space-x-2"
          >
            <span>{isDark ? 'Светлый' : 'Тёмный'}</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d={isDark ? 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' : 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'}
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;