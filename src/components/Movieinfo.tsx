import React from "react";
import Poster from "./Poster";
import Videos from "./Videos";
import Similars from "./Similars";
import Cast from "./Cast";
import TextMovieInfo from "./TextMovieInfo";

const Movieinfo = (props: any) => {
  console.log(props)
  const background = {
    background:
      "url(https://image.tmdb.org/t/p/original" +
      props.movie.backdrop_path +
      ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundClip: "content-box"
  };
  return (
    <div data-testid="details-page" className="details">
      <div style={background}>
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
      <Videos {...props.movie} />
      <Similars {...props.movie} />
    </div>
  );
};

export default Movieinfo;
