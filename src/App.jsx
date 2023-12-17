import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import RootProvider from "./core/providers/root_provider";
import { FavouriteMoviesProvider } from "./components/Favourites/FavouriteMoviesContext";

function App() {
  return (
    <>
      <RootProvider>
        <FavouriteMoviesProvider>
          <RouterProvider router={appRouter} />
        </FavouriteMoviesProvider>
      </RootProvider>
    </>
  );
}

export default App;
