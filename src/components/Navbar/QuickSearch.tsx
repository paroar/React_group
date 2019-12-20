import React from "react";
import Poster from "../Poster";
import { Link } from "react-router-dom";
import { SearchMovie } from "../../containers/QuickSearchContainer";

type SearchProps = {
  arr: SearchMovie[];
  handleOnClick: () => void;
};

const QuickSearch: React.FC<SearchProps> = props => {
  if (props.arr) {
    return (
      <div className="search-grid">
        {props.arr.map(movie => (
          <div className="search-grid--movie" onClick={props.handleOnClick}>
            <Link key={movie.id} to={`/catalogue/${movie.id}`}>
              <Poster imgPath={movie.poster_path}></Poster>
              <h3>{movie.title}</h3>
              {movie.release_date ? (
                <h3>{movie.release_date.substring(0, 4)}</h3>
              ) : null}
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default QuickSearch;
