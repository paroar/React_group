import React from "react";
import IconMenu from "../IconMenu";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar" data-testid="navbar">
        <IconMenu />
      </nav>
    </header>
  );
};

export default Navbar;
