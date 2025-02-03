import React from "react";
import { Link } from "react-router-dom";

import "./style/navBar.css";

const NavBar = (props) => {
  const { active } = props;

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={active === "skills" ? "nav-item active" : "nav-item"}
              >
                <Link to="/skills">Skills</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="download-cv-container">
          <a
            href="/doc/mrnurihsann-resume.pdf"
            download="mrnurihsann-resume.pdf"
            className="download-cv-button"
          >
            Download CV
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
