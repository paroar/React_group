import React from "react";
import Poster from "../Poster/Poster";
import { FetchMovie } from "../../utils/types";
import { Link } from "react-router-dom";

const createArr = (arr: any[]) => {
  let table = [];
  for (let i = 0; i < 6; i++) {
    table.push(arr[i]);
  }
  return table;
};

const Cast: React.FC<FetchMovie> = props => {
  return (
    <>
      {createArr(props.credits.cast).map(crew => (
        <Link to={`/actor/${crew.id}`}>
          <Poster
            key={crew.profile_path}
            imgPath={crew.profile_path}
            size={"w185"}
          />
        </Link>
      ))}
    </>
  );
};

export default Cast;
