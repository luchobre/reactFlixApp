const API_KEY = import.meta.env.VITE_APP_IMDB_APIKEY
const LANGUAGE = 'es-ES';

export const fetchMovie = async (movieId) => {
  const URL_ONEMOVIE = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`;
  try {
    const response = await fetch(URL_ONEMOVIE);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Error al recuperar los datos de la API');
  } catch (error) {
    throw new Error(error.message);
  }
};