import React from "react";
import logo from "../images/zip.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const active  = window.location.pathname;
  console.log(active);
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/service" className="nav-link">
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/product" className="nav-link">
                Product
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};