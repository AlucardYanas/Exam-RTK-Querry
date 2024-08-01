import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import OneTrackPage from './components/pages/OneTrackPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/one-track/:trackId',
          element: <OneTrackPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
