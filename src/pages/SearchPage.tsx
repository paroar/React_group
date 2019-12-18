import React from "react";
import SearchContainer from "../containers/SearchContainer";
import styled from "styled-components";
import { ids } from "../utils/ids";

const Genre = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 33%;
  padding: 0.4rem;
  background-color: grey;
  margin: 0.2rem auto;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 2;
  text-align: center;

  &:hover {
    background-color: #f76c5e;
    transform: translate(-50%, -2px);
  }
`;

const SearchPage = () => {
  console.log(ids);
  return (
    <div data-testid="search-page">
      <SearchContainer />
      <div className="search-container">
        <div className="search-container--bar">
          <input
            className="search-container--bar__input"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="search-container--filter">
          <select className="search-container--filter--select" name="" id="">
            <option value="">Valor</option>
          </select>

          <select className="search-container--filter--select" name="" id="">
            <option value="">Valor</option>
          </select>

          <select className="search-container--filter--select" name="" id="">
            <option value="">Valor</option>
          </select>
        </div>
        <div className="search-container--button">
          <Genre>Search</Genre>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
