import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Calender from './pages/Calender.jsx';
import Search from './pages/Search.jsx';
import Suggestions from './pages/Suggestions.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';

import Extra from './pages/Extra.jsx';

// subjects

import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

// Set the app element to the root
Modal.setAppElement('#root');

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },

      {
        path: '/Calender',
        element: <Calender />,
      },

      {
        path: '/Search',
        element: <Search />,
      },

      {
        path: '/Suggestions',
        element: <Suggestions />,
      },

      {
        path: '/login',
        element: <Login />
      },

      {
        path: '/signup',
        element: <Signup />
      },

      {
        path: '/Profile',
        element: <Profile />
      },

      {
        path: '/Extra',
        element: <Extra />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
