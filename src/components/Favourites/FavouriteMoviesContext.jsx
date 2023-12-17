import { createContext, useContext, useEffect, useState } from "react";
import { AppStorage } from "../../core/base/app_storage";

const FavouriteMoviesContext = createContext();

export const FavouriteMoviesProvider = ({ children }) => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    const loadFavouriteMovies = async () => {
      const storedFavourites = await AppStorage.get("isFavourite");
      setFavouriteMovies(storedFavourites || []);
    };
    loadFavouriteMovies();
  }, []);

  const saveFavourite = async (state) => AppStorage.save('isFavourite', state);

  const handleFavourite = (movie) => {
    const isMovieInFavourites = favouriteMovies.find(
      (favMovie) => favMovie.id === movie.id
    );

    const updatedFavourites = isMovieInFavourites
      ? favouriteMovies.filter((favMovie) => favMovie.id !== movie.id)
      : [...favouriteMovies, movie];

    saveFavourite(updatedFavourites);

    setFavouriteMovies(updatedFavourites);
      console.log('Listado de favoritos: ', favouriteMovies)

  };


  return (
    <FavouriteMoviesContext.Provider
      value={{
        favouriteMovies,
        handleFavourite
      }}
    >
      {children}
    </FavouriteMoviesContext.Provider>
  );
};

const useFavouriteMovies = () => {
  const context = useContext(FavouriteMoviesContext);

  if (!context) {
    throw new Error(
      "useFavouriteMovies must be used within a FavouriteMoviesProvider"
    );
  }

  return context;
};

export default useFavouriteMovies;
