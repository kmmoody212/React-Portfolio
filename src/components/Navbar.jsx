import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="left-nav">
        <h1>Katrina Moody</h1>
      </div>
      <div className="right-nav">
        <NavLink to="/aboutme" className="link" activeClassName="active">
          About Me
        </NavLink>
        <NavLink to="/portfolio" className="link" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/contact" className="link" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/resume" className="link" activeClassName="active">
          Resume
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
