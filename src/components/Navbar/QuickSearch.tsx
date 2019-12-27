import React, { useEffect } from "react";
import Poster from "../Poster";
import { Link } from "react-router-dom";
import { SearchMovie } from "../../containers/QuickSearchContainer";

type SearchProps = {
  arr: SearchMovie[];
  handleOnClick: () => void;
};

const QuickSearch: React.FC<SearchProps> = props => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        props.handleOnClick();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [props]);

  if (props.arr && props.arr.length > 0) {
    return (
      <div className="search-grid" onClick={props.handleOnClick}>
        {props.arr.map(movie => (
          <div className="search-grid--movie">
            <Link key={movie.id} to={`/catalogue/${movie.id}`}>
              {movie.poster_path ? (
                <Poster imgPath={movie.poster_path} />
              ) : (
                <span className="quicksearch-placeholder">No image</span>
              )}
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
