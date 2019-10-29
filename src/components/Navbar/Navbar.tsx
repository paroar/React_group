import React from "react";
import Search from "./Search/Search";
import Tags from "./Tags/Tags";


const Navbar: React.FC = () => {
  console.log("ESTA FUNCIONANDO");
  return (
    <nav className="Navbar--navbar">
      <h3>Logo</h3>
      <Tags></Tags>
      <Search></Search>
    </nav>
  );
};

export default Navbar;
