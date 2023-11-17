import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/HomeView";
import LoginView from "../../features/login/views/LoginView";
import MovieView from "../../features/movie/views/MovieView";
import PrivateRoute from "../auth/components/private_route";
import PublicRoute from "../auth/components/public_route";
import SeriesViews from "../../features/series/views/seriesViews";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginView />
      </PublicRoute> 
    ),
  },
  {
    path: "/movie/:movieId",
    element: (
      // <PrivateRoute>
        <MovieView />
      // </PrivateRoute>
    ),
  },
  {
    path: "/tv/:serieId",
    element: (
      // <PrivateRoute>
        <SeriesViews />
      // </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: 'No se encontro la pagina'
  },
]);
