import React from "react";
import Search from "./Search/Search";
import Tabs from "./Tabs/Tabs";
import Logo from "./Logo/Logo";


const Navbar = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <Logo/>
      <Search/>
      <Tabs/>
    </nav>
  );
};

export default Navbar;
