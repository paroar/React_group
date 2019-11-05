import React from "react";
import Search from "./Search/Search";
import Tags from "./Tags/Tags";
import Logo from "./Logo/Logo";


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
