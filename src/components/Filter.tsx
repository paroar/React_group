import React, { useState } from "react";
import { ids } from "../utils/ids";
import { Link } from "react-router-dom";
import { keywords } from "../utils/keywords";

const ratings = Array.from({ length: 10 }, (_x, i) => i);

const sortBy = [
  "popularity",
  "release_date",
  "revenue",
  "original_title",
  "vote_count",
  "vote_average"
];

const orderBy = ["desc", "asc"];

const Filter = () => {
  const [genreState, changeGenreState] = useState("");
  const [ratingState, changeRatingState] = useState("");
  const [sortState, changeSortState] = useState("");
  const [orderState, changeOrderState] = useState("");
  const [keywordState, changeKeywordState] = useState("");

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

  const handleKeyword = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeKeywordState(e.target.value);
  };

  const handleParams = () => {
    return {
      pathname: "/Catalogue",
      param2: genreState,
      param3: sortState,
      param4: orderState,
      param5: ratingState,
      param6: keywordState
    };
  };

  return (
    <div data-testid="search-page">
      <div className="search-container">
        <div className="search-container--filter">
          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleKeyword(e)}
            defaultValue=""
          >
            <option value="" disabled>
              Keyword
            </option>
            {keywords.sort().map(keyword => (
              <option key={keyword.id} value={keyword.id}>
                {keyword.name}
              </option>
            ))}
          </select>

          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleGenre(e)}
            defaultValue=""
          >
            <option value="" disabled>
              Genre
            </option>
            {ids.genres.map(genre => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>

          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleRating(e)}
            defaultValue=""
          >
            <option value="" disabled>
              Rating
            </option>
            {ratings.map(rating => (
              <option key={rating} value={rating}>
                +{rating}
              </option>
            ))}
          </select>

          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleSort(e)}
            defaultValue=""
          >
            <option value="" disabled>
              Sort by
            </option>
            {sortBy.map(sort => (
              <option key={sort} value={sort}>
                {sort}
              </option>
            ))}
          </select>

          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => handleOrder(e)}
            defaultValue=""
          >
            <option value="" disabled>
              Order by
            </option>
            {orderBy.map(order => (
              <option key={order} value={order}>
                {order}
              </option>
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

export default Filter;
