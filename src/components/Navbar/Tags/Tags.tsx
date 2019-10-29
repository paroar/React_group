import React from "react";
import { Link } from "react-router-dom";

const Tags: React.FC = () => {
  return (
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
  );
};

export default Tags;