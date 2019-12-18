import React from "react";
import IconMenu from "./IconMenu";
import SearchContainer from "../../containers/SearchContainer";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar" data-testid="navbar">
        <SearchContainer/>
        <IconMenu />
      </nav>
    </header>
  );
};

export default Navbar;
