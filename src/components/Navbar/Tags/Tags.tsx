import React from "react";
import { Link } from "react-router-dom";

const Tags: React.FC = () => {
  return (
    <ul className="navbar--list">
      <Link to="/">
        Home
      </Link>
      <Link to="/catalogue">
        Catalogue
      </Link>
      <Link to="/news">
        News
      </Link>
      <Link to="/help">
        Help
      </Link>
    </ul>
  );
};

export default Tags;