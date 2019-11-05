import React from "react";
import Poster from "./Poster";

const Actor = (props: any) => {
  console.log("<<<<<", props);
  return (
    <>
      <Poster size="original" imgPath={props.movies.profile_path} />
    </>
  );
};

export default Actor;
//          <Grid arr={props.movies.combined_credits.cast} />
