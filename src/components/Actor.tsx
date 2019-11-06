import React from "react";
import Poster from "./Poster";
import Grid from "./Grid";

const Actor = (props: any) => {
  return (
    <>
      <Poster size="original" imgPath={props.movies.profile_path} />
      <Grid arr={props.movies.combined_credits.cast} />
    </>
  );
};

export default Actor;         
