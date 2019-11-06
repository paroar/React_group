import React from "react";
import Poster from "./Poster";
import { FetchMovie } from "../utils/types";
import { Link } from "react-router-dom";

const createArr = (arr: any[]) => {
  let table = [];
  for (let i = 0; i < 6; i++) {
    table.push(arr[i]);
  }
  return table;
};

const Cast: React.FC<FetchMovie> = props => {
  if (!props.credits.cast) {
    return null;
  } else {
    return (
      <div className="details--movieInfo__cast">
        {createArr(props.credits.cast).map(crew => (
          <Link to={`/actor/${crew.id}`} key={crew.profile_path}>
            <Poster
              key={crew.profile_path}
              imgPath={crew.profile_path}
              size={"original"}
              className="details--movieInfo__cast--img"
            />
          </Link>
        ))}
      </div>
    );
  }
};

export default Cast;
