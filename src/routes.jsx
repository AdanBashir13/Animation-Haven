import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import TopRatedPage from './pages/TopRatedPage';
import LoginForm from './pages/SignupForm';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <HomePage />, // Renders component
    errorElement: <ErrorPage /> // Renders ErrorPage if error occurs
  },
  {
    path: '/movies',
    element: <MoviesPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/tvshows',
    element: <TVShowsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/top-rated',
    element: <TopRatedPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginForm />,
    errorElement: <ErrorPage />
  },
]);

// Provide the router to the application
const Routes = () => <RouterProvider router={router} />;

export default Routes;
