import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../assets/images/Megaselia_logo.jpg";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="logo">
          <img src={logoImage} alt="Phoridae logo" />
        </NavLink>
      </div>

      <div className="navbar-center">
        <NavLink to="/phoridae/people" className="nav-link">
          People
        </NavLink>
        <NavLink to="/phoridae/projects" className="nav-link">
          Projects
        </NavLink>
        <NavLink to="/phoridae/photoGallery" className="nav-link">
          Gallery
        </NavLink>
        <NavLink to="/phoridae/identificationKeys" className="nav-link">
           Keys
        </NavLink>
        <NavLink to="/phoridae/newsletters" className="nav-link">
          Newsletters
        </NavLink>
        <NavLink to="/phoridae/about" className="nav-link">
          About
        </NavLink>
      </div>

      <div className="navbar-right">
        <FaUser size={36} />
      </div>
    </nav>
  );
}

export default Navbar;
