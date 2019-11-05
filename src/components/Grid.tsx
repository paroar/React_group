import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";

const Grid = (props: any) => {
  console.log("******", props);
  if (!props) {
    return null;
  } else {
    return (
      <div className="grid">
        {props.arr.map((movie: { poster_path: string; id: string }) => (
          <Link key={movie.id} to={`/catalogue/${movie.id}`}>
            <Poster
              key={movie.id}
              size="original"
              imgPath={movie.poster_path}
              className="grid--img"
            />
          </Link>
        ))}
      </div>
    );
  }
};

export default Grid;
