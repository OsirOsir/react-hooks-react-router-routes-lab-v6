import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";


const routes = [
  {
    path: '/', 
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/directors', 
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: '/actors', 
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: 'movie/:id',  // Change from 'movies/:id' to 'movie/:id'
    element: <Movie />,
    errorElement: <ErrorPage />
  },
];

export default routes;