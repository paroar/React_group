import React, { useState } from "react";
import SearchContainer from "../containers/SearchContainer";
import { ids } from "../utils/ids";
import { Link } from "react-router-dom";

const ratings = Array.from({ length: 10 }, (_x, i) => i);

const sortBy = ["popularity", "release_date", "revenue","original_title","vote_count" ,"vote_average"];

const orderBy = ["desc", "asc"];

const SearchPage = () => {
  const [genreState, changeGenreState] = useState("");
  const [ratingState, changeRatingState] = useState("");
  const [sortState, changeSortState] = useState("");
  const [orderState, changeOrderState] = useState("");

  const handleGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeGenreState(e.target.value);
  };

  const handleRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeRatingState(e.target.value);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSortState(e.target.value);
  };

  const handleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeOrderState(e.target.value);
  };

  const handleParams = () => {
    return {
      pathname: "/Catalogue",
      param2: genreState,
      param3: sortState,
      param4: orderState,
      param5: ratingState
    };
  };

  console.log("GENRE", genreState);
  console.log("RATING", ratingState);
  console.log("SORT", sortState);
  console.log("ORDER", orderState);
  return (
    <div data-testid="search-page">
      <SearchContainer />
      <div className="search-container">
        <div className="search-container--filter">
          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleGenre(e)}
          >
            <option value="" selected disabled>
              Genre
            </option>
            {ids.genres.map(genre => (
              <option value={genre.id}>{genre.name}</option>
            ))}
          </select>

          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleRating(e)}
          >
            <option value="" selected disabled>
              Rating
            </option>
            {ratings.map(rating => (
              <option value={rating}>+{rating}</option>
            ))}
          </select>

          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleSort(e)}
          >
            <option value="" selected disabled>
              Sort by
            </option>
            {sortBy.map(sort => (
              <option value={sort}>{sort}</option>
            ))}
          </select>

          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleOrder(e)}
          >
            <option value="" selected disabled>
              Order by
            </option>
            {orderBy.map(order => (
              <option value={order}>{order}</option>
            ))}
          </select>
        </div>
        <div className="search-container--button">
          <Link to={handleParams()}>
            <span className="search-container--button__button">Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
