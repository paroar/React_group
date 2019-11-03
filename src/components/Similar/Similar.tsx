import React from "react";
import { FetchMovie } from "../../utils/types";
import Poster from "../Poster/Poster";
import { Link } from "react-router-dom";

const Similar: React.FC<FetchMovie> = props => {
  if (!props.similar) {
    return null;
  } else {
    return (
      <>
        {props.similar.results.map(movie => (
          <Link key={movie.id} to={`/catalogue/${movie.id}`}>
            <Poster imgPath={movie.poster_path} size={"original"} className="grid--img"></Poster>
          </Link>
        ))}
      </>
    );
  }
};

export default Similar;
