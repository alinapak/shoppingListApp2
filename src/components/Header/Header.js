import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
      <nav className="navbar navbar-light bg-light">
        <ul className="container-fluid justify-content-start">
          <li className="navbar-nav px-3">
            <NavLink  className={({ isActive }) => (isActive ? "nav-link text-success active" : "nav-link ")} to="/">Welcome</NavLink>
          </li>
          <li className="navbar-nav px-3">
            <NavLink   className={({ isActive }) => (isActive ? "nav-link text-success active" : "nav-link ")} to="/app">
              Shopping List App
            </NavLink>
          </li>
        </ul>
      </nav>

  </>
);


export default Header;
