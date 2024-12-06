import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';  // Import the useQuery hook
import { QUERY_ME } from './../utils/queries';     // Import the GET_ME query
import '../App.css';

function Navigation() {
  const currentPage = useLocation().pathname;
  const isLoggedIn = Auth.loggedIn();

    // Fetch user data if logged in
    const { data, loading, error } = useQuery(QUERY_ME, {
      skip: !isLoggedIn,  // Skip the query if not logged in
    });

  // login condition //

  function showNavigation() {
    if (isLoggedIn) {
      const user = data ? data.me : null; // Get user from the query response
      return (
        <React.Fragment>
          <li className="nav-item right-username">
            <span className="nav-link">
              Hi, {user ? user.username : 'User'}
            </span>
          </li>

          <li className="nav-item">
            <Link to="/Profile" className={currentPage === '/account' ? 'nav-link active' : 'nav-link'}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" onClick={() => Auth.logout()} className="nav-link">
              Logout
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link to="/signup" className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>
              Login
            </Link>
          </li>
        </React.Fragment>
      );
    }
  }

  // end login condition function-----------------------------------------------//

// ------------------------------- MAIN NAVIGATION LINKS ------------------//

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">

        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Current Activity
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Calender"
          className={currentPage === '/Calender' ? 'nav-link active' : 'nav-link'}
        >
          Calender
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Search"
          className={currentPage === '/Search' ? 'nav-link active' : 'nav-link'}
        >
          Search
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Suggestions"
          className={currentPage === '/Suggestions' ? 'nav-link active' : 'nav-link'}
        >
          Song Suggestions
        </Link>
      </li>

                 {/* New Tab Linking to Fiction-Map - currently a Google placeholder */}
                 <li className="nav-item">
        <a href="https://www.facebook.com/groups/924179039723377" className="nav-link" target="_blank" rel="noopener noreferrer">
          FB Band Group
        </a>
      </li>

    {/* ---------------------------------- log in conditional function --------------------------------  */}

    {showNavigation()}

    {/* ----------------------------------end --------------------------------  */}

    </ul>
  );
}

export default Navigation;
