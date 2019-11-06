import React from "react";
import { FetchMovie } from "../utils/types";

import Grid from "./Grid";

const Similars: React.FC<FetchMovie> = props => {
  if (!props.similar) {
    return null;
  } else {
    return (
        <Grid arr={props.similar.results}/>
    );
  }
};

export default Similars;
