import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="left-nav">
        <h1>Katrina Moody</h1>
      </div>
      <div className="right-nav">
        <Link to="/aboutme" className="link">
          About Me
        </Link>
        <Link to="/portfolio" className="link">
          Portfolio
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Link to="/resume" className="link">
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
