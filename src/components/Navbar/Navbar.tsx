import React, { useState } from "react";
import Tabs from "./Tabs";
import IconMenu from "./IconMenu";
import QuickSearchContainer from "../../containers/QuickSearchContainer";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleIsOpen = () => {
    if (window.innerWidth < 900) {
      setisOpen(!isOpen);
    }
  };

  return (
    <header>
      <nav>
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
