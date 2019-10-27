import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <nav className="Navbar--navbar">
      <h3>Logo</h3>
      <ul className="Navbar--navbar-list">
        <NavLink to="/" style={navStyle}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/catalogue" style={navStyle}>
          <li>Catalogue</li>
        </NavLink>
        <NavLink to="/news" style={navStyle}>
          <li>News</li>
        </NavLink>
        <NavLink to="/help" style={navStyle}>
          <li>Help</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
