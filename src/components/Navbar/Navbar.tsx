import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";
import IconMenu from "./IconMenu";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <IconMenu handleIsOpen={handleIsOpen} isOpen={isOpen}></IconMenu>

        <ul
          className={"nav-links " + (isOpen ? "open" : "")}
          onClick={handleIsOpen}
        >
          <Tabs handleIsOpen={handleIsOpen}></Tabs>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
