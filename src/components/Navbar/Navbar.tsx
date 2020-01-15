import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";
import IconMenu from "./IconMenu";
import QuickSearchContainer from "../../containers/QuickSearchContainer/QuickSearchContainer";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleIsOpen = () => {
    if (window.innerWidth < 900) {
      setisOpen(!isOpen);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <QuickSearchContainer isOpen={isOpen} handleIsOpen={handleIsOpen} />
        <IconMenu isOpen={isOpen} handleIsOpen={handleIsOpen}  />
        <Tabs
          isOpen={isOpen}
          handleIsOpen={handleIsOpen}
        />
      </nav>
    </header>
  );
};

export default Navbar;
