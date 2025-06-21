КиноПоиск - Приложение для поиска фильмов
Добро пожаловать в КиноПоиск, современное веб-приложение для поиска фильмов, вдохновленное стилем популярного сервиса КиноПоиск. Приложение использует API TMDb для отображения популярных фильмов, поиска по названию и просмотра деталей фильмов с красочной красной темой и анимациями.
Установка и запуск

cd movie-search-app


Установка зависимостей:
npm install


Настройка переменных окружения:

Создайте файл .env в корневой директории и добавьте токен TMDb API:VITE_TMDB_API_TOKEN=ваш_токен_TMDB_API


Замените ваш_токен_TMDB_API на ваш действительный токен от TMDb.


Запуск локально:
npm run dev


Откройте http://localhost:5173 в браузере.


Сборка для продакшна:
npm run build


Выходные файлы будут в папке dist.



Развертывание
GitHub

Репозиторий уже опубликован: movie-search-app.
Убедитесь, что все изменения зафиксированы и отправлены:git add .
git commit -m "Обновление проекта"
git push origin main



Vercel

Перейдите на vercel.com и войдите в аккаунт.
Нажмите "New Project" > "Import Git Repository".
Выберите репозиторий movie-search-app.
Настройте параметры:
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist


Добавьте переменную окружения:
Имя: VITE_TMDB_API_TOKEN
Значение: Ваш токен TMDb API


Нажмите "Deploy" и дождитесь завершения.
Посетите предоставленный URL (например, https://movie-search-app.vercel.app) для проверки.

Функционал

Поиск фильмов: Введите название фильма в строку поиска.
Популярные фильмы: Отображение списка популярных фильмов на главной странице.
Детали фильма: Страница с подробной информацией о выбранном фильме.
Тема: Переключение между светлым и темным режимом с красными акцентами.
Анимации: Скользящая навигационная панель, пульсирующие кнопки и эффекты наведения.
Адаптивность: Поддержка мобильных устройств с меню-гамбургером.

Технологии

Frontend: React, Vite, Tailwind CSS
API: TMDb API
Развертывание: Vercel
Управление состоянием: React Router, React Hook Form

Структура проекта
movie-search-app/
├── public/
│   ├── placeholder.jpg
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── MovieCard/
│   │   └── Navbar/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── index.html
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── .prettierrc
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js

Спасибо за использование КиноПоиск! 🚀
