import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const PersonalInfo = () => <div>Personal info</div>;
const Career = () => <div>Career</div>;
const Share = () => <div>Share</div>;

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
        path: '/career',
        element: <Career />,
      },
      {
        path: '/share',
        element: <Share />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);