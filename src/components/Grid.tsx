import React from "react";
import Poster from "./Poster/Poster";
import { Link } from "react-router-dom";

const Grid = (props: any) => {
  return (
    <div className="grid">
      {props.arr.map((movie: { poster_path: string; id: string }) => (
        <Link key={movie.id} to={`/catalogue/${movie.id}`}>
          <Poster key={movie.id} size="original" imgPath={movie.poster_path}/>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
