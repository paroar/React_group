import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";
import { GridProps } from "../utils/types";
import Card from "./Card";

const Grid: React.FC<GridProps> = props => {
  if (!props) {
    return null;
  } else {
    return (
      <>
        {props.arr.map(movie =>
          movie.poster_path ? (
            <Link key={movie.id} to={`/catalogue/${movie.id}`}>
              <Card title={movie.title} vote={movie.vote_average} backdrop_path={movie.backdrop_path}>
                <Poster key={movie.id} imgPath={movie.poster_path} />
              </Card>
            </Link>
          ) : null
        )}
      </>
    );
  }
};

export default Grid;
