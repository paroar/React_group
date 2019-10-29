import React from "react";
import { FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <FaFilm className="navbar--logo" size={50}></FaFilm>
    </Link>
  );
};

export default Logo;
