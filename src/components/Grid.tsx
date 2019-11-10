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
      <div>
        <div className="grid">
          {props.arr.map(movie => (
            <Link key={movie.id} to={`/catalogue/${movie.id}`}>
              <Poster
                key={movie.id}
                size="original"
                imgPath={movie.poster_path}
              />
            </Link>
          ))}
        </div>
        {props.children}
      </div>
    );
  }
};

export default Grid;
