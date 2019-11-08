import React from "react";
import Poster from "./Poster";
import TextMovieInfo from "./TextMovieInfo";
import Cast from "./Cast";

const Movieinfo = (props: any) => {
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
