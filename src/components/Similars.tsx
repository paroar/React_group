import React from "react";
import { Link } from "react-router-dom";
import Poster from "./Poster";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Similars: React.FC = (props: any) => {
  if (!props.similar) {
    return null;
  } else {
    return (
      <section id="similarId">
        <span onClick={props.left}>
          <IoIosArrowDropleft size={40} />
        </span>
        <span onClick={props.right}>
          <IoIosArrowDropright size={40} />
        </span>
        <div className="grid">
          {props.similar.map((movie: any) => (
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
      </section>
    );
  }
};

export default Similars;
