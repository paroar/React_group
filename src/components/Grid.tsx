import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";
import { GridProps } from "../utils/types";
import Card from "./Card/Card";
import Draggable from "./DnD/Draggable";

const Grid: React.FC<GridProps> = props => {
  if (!props) {
    return null;
  } else {
    return (
      <>
        {props.arr.map(movie =>
          movie.poster_path ? (
            <Draggable key={movie.id} id={movie.id}>
            <Link  to={`/catalogue/${movie.id}`}>
              <Card title={movie.title} vote={movie.vote_average} backdrop_path={movie.backdrop_path}>
                <Poster imgPath={movie.poster_path} />
              </Card>
            </Link>
            </Draggable>
          ) : null
        )}
      </>
    );
  }
};

export default Grid;
