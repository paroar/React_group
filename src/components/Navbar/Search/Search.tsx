import React from "react";
import { FaSearch } from "react-icons/fa";

const Search: React.FC = () => {
  return (
    <>
      <input />
      <button onClick={alert}>
        <FaSearch size={25} color="white"></FaSearch>
      </button>
    </>
  );
};

export default Search;
