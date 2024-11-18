import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Calender from './pages/Calender.jsx';
import Suggestions from './pages/Suggestions.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';

// subjects

import Genre from './pages/Genre.jsx';
import Techniques from './pages/Techniques.jsx';
import Tropes from './pages/Tropes.jsx';
import Scenes from './pages/Scenes.jsx';
import Types from './pages/Types.jsx';
import ScaryWords from './pages/ScaryWords.jsx';

import References from './pages/References.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

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
        path: '/Suggestions',
        element: <Suggestions />,
      },

      {
        path: '/Genre',
        element: <Genre />,
      },

      {
        path: '/Techniques',
        element: <Techniques />,
      },
      {
        path: '/Types',
        element: <Types />,
      },

      {
        path: '/Scenes',
        element: <Scenes />,
      },

      {
        path: '/Tropes',
        element: <Tropes />,
      },
      {
        path: '/Techniques',
        element: <Techniques />,
      },
      {
        path: '/ScaryWords',
        element: <ScaryWords />,
      },

      {
        path: '/References',
        element: <References />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
