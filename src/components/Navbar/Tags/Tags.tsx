import React from "react";
import { Link } from "react-router-dom";

const Tags: React.FC = () => {
  return (
    <ul className="navbar--list">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/catalogue">
      <li>Catalogue</li>
      </Link>
      <Link to="/news">
      <li>News</li>
      </Link>
      <Link to="/help">
      <li>Help</li>
      </Link>
    </ul>
  );
};

export default Tags;