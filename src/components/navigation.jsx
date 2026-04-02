import React from "react";
import logo from "../images/zip.png";
// import { Contact } from "./contact";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
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
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          {/* <a  href="#page-top"> */}

          <Link to="/" className="navbar-brand page-scroll">
            <img src={logo} alt="logo" />
          </Link>
          {/* </a>{" "} */}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className="page-scroll">
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="page-scroll">
                Services
              </Link>
            </li>
            <li>
              <Link to="/product" className="page-scroll">
                Product
              </Link>
            </li>
            <li>
              <Link to="/about" className="page-scroll">
                About
              </Link>
            </li>

            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              {/* <a href={<Contact/>} className="page-scroll"> */}
              <Link to="/contact" className="page-scroll">
                Contact
              </Link>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
