import React from "react";
import { NavLink } from "react-router-dom";
import { BtnDarkMode } from "../BtnDarkMode";
import "./style.css";

export const NavBar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Lansarov</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
