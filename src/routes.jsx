import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import TopRatedPage from './pages/TopRatedPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/movies',
    element: <MoviesPage />,
  },
  {
    path: '/tvshows',
    element: <TVShowsPage />,
  },
  {
    path: '/top-rated',
    element: <TopRatedPage />
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
