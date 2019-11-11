import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";

type GridProps = {
  arr: any[];
};

const Grid: React.FC<GridProps> = props => {
  if (!props) {
    return null;
  } else {
    return (
      <>
        {props.arr.map(movie =>
          movie.poster_path ? (
            <Link key={movie.id} to={`/catalogue/${movie.id}`}>
              <Poster
                key={movie.id}
                size="original"
                imgPath={movie.poster_path}
              />
            </Link>
          ) : (
            null
          )
        )}
      </>
    );
  }
};

export default Grid;
