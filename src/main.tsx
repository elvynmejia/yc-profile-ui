import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PersonalInfo from './routes/personalInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // padding: theme.spacing(),
      // width: '100%'
      marginTop: '20px',
      width: '100ch',
    },
  },
  textField: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

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