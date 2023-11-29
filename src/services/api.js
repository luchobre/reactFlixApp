export const fetchData = async (page = 1, category = 'popular', type = 'movie') => {
  const API_KEY = import.meta.env.VITE_APP_IMDB_APIKEY;
  const LANGUAGE = 'es-ES'; 
  const MOVIEDB_URL = `https://api.themoviedb.org/3/${type}/${category}?api_key=${API_KEY}&page=${page}&language=${LANGUAGE}`;
  try {
    const response = await fetch(MOVIEDB_URL);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Error al recuperar los datos de la API');
  } catch (error) {
    throw new Error(error.message);
  }
};