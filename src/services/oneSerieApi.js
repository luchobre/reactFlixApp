const API_KEY = 'ac0627bfbad8d649f13be58b7907a6b1'
const LANGUAGE = 'es-ES';

export const fetchSerie = async (serieId) => {
  try {
    const URL_ONESERIE = `https://api.themoviedb.org/3/tv/${serieId}?api_key=${API_KEY}&language=${LANGUAGE}`;
    const response = await fetch(URL_ONESERIE);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Error al recuperar los datos de la API de series');
  } catch (error) {
    throw new Error(error.message);
  }
};



// https://api.themoviedb.org/3/serie/218145?api_key=ac0627bfbad8d649f13be58b7907a6b1