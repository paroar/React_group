import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Grid = (props: any) => {
  if (!props) {
    return null;
  } else {
    return (
      <div>
        <span onClick={props.left}>
          <IoIosArrowDropleft size={40} />
        </span>
        <span onClick={props.right}>
          <IoIosArrowDropright size={40} />
        </span>

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
      </div>
    );
  }
};

export default Grid;
