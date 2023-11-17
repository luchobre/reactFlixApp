export const fetchData = async (page = 1, category = 'popular', type = 'movie') => {
  const API_KEY = 'ac0627bfbad8d649f13be58b7907a6b1';
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


//https://api.themoviedb.org/3/movie/popular?api_key=ac0627bfbad8d649f13be58b7907a6b1&page=2


// https://api.themoviedb.org/3/movie/top_rated?api_key=ac0627bfbad8d649f13be58b7907a6b1&page=1