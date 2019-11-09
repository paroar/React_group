import React from "react";
import Poster from "./Poster";
import TextMovieInfo from "./TextMovieInfo";
import { FetchMovie } from "../utils/types";
import Cast from "./Cast";

type MyState={
  movie: FetchMovie;
}
const Movieinfo = (props: MyState) => {
  const background = {
    background:
      "url(https://image.tmdb.org/t/p/original" +
      props.movie.backdrop_path +
      ")"
  };
  return (
    <div data-testid="details-page" className="details">
      <div style={background} className="back">
        <div className="details--movieInfo">
          <Poster
            imgPath={props.movie.poster_path}
            size={"original"}
            className={"poster"}
          />
          <TextMovieInfo {...props.movie} />
        </div>
      </div>
      <Cast {...props.movie} />
    </div>
  );
};

export default Movieinfo;

/**
 * import Cast from "./Cast";
 *       //@ts-ignore
      
 */