import React from "react";
import { FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" data-testid="logo">
      <FaFilm className="navbar--logo" size={50}></FaFilm>
    </Link>
  );
};

export default Logo;
