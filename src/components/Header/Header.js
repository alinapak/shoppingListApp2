import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <>
      <nav className="navbar navbar-light bg-light">
        <ul className="container-fluid justify-content-start">
          <li className="navbar-nav px-3">
            <Link className="nav-link text-success" to="/">Welcome</Link>
          </li>
          <li className="navbar-nav px-3">
            <NavLink className="nav-link text-success" to="/app">
              Shopping List App
            </NavLink>
          </li>
        </ul>
      </nav>

  </>
);


export default Header;
