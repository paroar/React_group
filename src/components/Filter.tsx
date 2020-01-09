import React, { useContext } from "react";
import { ids } from "../utils/ids";
import { keywords } from "../utils/keywords";
import { GenreContext } from "../contexts/GenreContext";

const ratings = Array.from({ length: 10 }, (_x, i) => i);

const sortBy = [
  "popularity",
  "release_date",
  "revenue",
  "original_title",
  "vote_count",
  "vote_average"
];

// const orderBy = ["desc", "asc"];

const Filter = (props: any) => {
  const { handleGenre } = useContext(GenreContext);
  return (
    <div data-testid="search-page" className="search-filter">
      <div className="search-container">
        <div className="search-container--filter">
          <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => props.handleKeyword(e)}
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
            onChange={e => handleGenre(e.target.value)}
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
            onChange={e => props.handleRating(e)}
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
            onChange={e => props.handleSort(e)}
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

          {/* <select
            className="search-container--filter--select"
            name=""
            id=""
            onChange={e => props.handleOrder(e)}
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
          </select> */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
