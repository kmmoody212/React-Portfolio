import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <Link to="/" className="link">
        Home
      </Link>
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
  );
}

export default Navbar;
