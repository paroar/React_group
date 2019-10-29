import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  console.log("ESTA FUNCIONANDO");
  return (
    <nav className="Navbar--navbar">
      <h3>Logo</h3>
      <ul className="Navbar--navbar-list">
        <Link to="/" className="nav-style">
          <li>Home</li>
        </Link>
        <Link to="/catalogue" className="nav-style">
          <li>Catalogue</li>
        </Link>
        <Link to="/news" className="nav-style">
          <li>News</li>
        </Link>
        <Link to="/help" className="nav-style">
          <li>Help</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
