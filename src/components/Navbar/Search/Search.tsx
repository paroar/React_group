import React from "react";
import { GoSearch } from "react-icons/go";

const Search: React.FC = () => {
  return (
    <div className="navbar--search">
      <input type="search" />
      <button onClick={alert} className="navbar--button">
        <GoSearch size={25} color="white"></GoSearch>
      </button>
    </div>
  );
};

export default Search;
