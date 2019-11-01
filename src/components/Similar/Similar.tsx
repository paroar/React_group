import React from "react";
import { FetchMovie } from "../../utils/types";
import Poster from "../Poster/Poster";
import { Link } from "react-router-dom";

const Similar: React.FC<FetchMovie> = props => {
  return (
    <>
      {props.similar.results.map(movie => (
        <Link key={movie.id} to={`/catalogue/${movie.id}`}>
        <Poster key={movie.poster_path} imgPath={movie.poster_path} size={"w185"} />
        </Link>
      ))}
    </>
  );
};

export default Similar;
