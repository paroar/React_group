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
    
    //[{id: 1}, {id: 2},{id: 1},{id: 2},{id: 3}].reduce((os, o) => os.find(oo => oo.id === o.id) ? os : [...os, o], []);
    //const setMovies:any[] = props.arr.reduce((movies, movie) => movies.find((mov:any) => mov.id === movie.id) ? movies : [...movies,mov],[]);
    return (
      <>
        {props.arr.map(movie =>
          movie.poster_path ? (
            <Draggable key={movie.id} id={movie.id}>
              <Link to={`/catalogue/${movie.id}`}>
                <Card
                  title={movie.title}
                  vote={movie.vote_average}
                  backdrop_path={movie.backdrop_path}
                >
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
