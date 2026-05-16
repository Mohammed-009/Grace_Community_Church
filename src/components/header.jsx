import React from "react";
// import { NavLink, Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/bootstrap-icon.css";

export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container-fluid">
        <span className="navbar-brand fw-bolder fs-3">
          Grace Community Church
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2">
            <li className="nav-item">
              <a href="#home" className="nav-link text-dark">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link text-dark">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#services" className="nav-link text-dark">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a href="#events" className="nav-link text-dark">
                Events
              </a>
            </li>

            <li className="nav-item">
              <a href="#contacts" className="nav-link text-dark">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link text-dark background-visit">
                Visit Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
