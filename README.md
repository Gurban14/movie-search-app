# Movie Search App

A React Vite application for searching movies using the TMDb API.

## Setup
1. Install dependencies: `npm install`
2. Ensure `.env` contains the TMDb API token (already included).
3. Add a 300x450 `public/placeholder.jpg` for missing movie posters.
4. Run locally: `npm run dev`
5. Build for production: `npm run build`

## Deployment
- Push to GitHub: `git push origin main`
- Deploy on Vercel, ensuring `VITE_TMDB_API_TOKEN` is set in the Vercel dashboard.
- Access the live URL.

## Features
- Search movies by title
- View popular movies
- Movie details page
- Dark/light mode toggle
- Responsive design

## Creating ZIP
1. Run `npm install` to include dependencies (optional for submission).
2. Add `public/placeholder.jpg` (300x450).
3. Zip the `movie-search-app` folder:
   - Windows: Right-click > Send to > Compressed (zipped) folder
   - Mac: Right-click > Compress 'movie-search-app'
   - Linux: `zip -r movie-search-app.zip movie-search-app`
4. Submit `movie-search-app.zip` or upload to a cloud service.