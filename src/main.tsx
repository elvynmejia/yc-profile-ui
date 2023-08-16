import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PersonalInfo from './pages/personalInfo.tsx';
import Location from './pages/location.tsx';
import Career from './pages/career.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PersonalInfo />
      },
      {
        path: '/location',
        element: <Location />
      },
      {
        path: '/career',
        element: <Career />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
