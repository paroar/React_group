import React from "react";
import Search from "./Search/";
import Tags from "./Tags/";
import Logo from "./Logo/";


const Navbar: React.FC = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <Logo/>
      <Search/>
      <Tags/>
    </nav>
  );
};

export default Navbar;
