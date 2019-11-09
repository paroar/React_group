import React from "react";
import Poster from "./Poster";
import Grid from "./Grid";

const Actor:React.FC<any> = (props) => {
  return (
    <>
      <Poster size="original" imgPath={props.movies.profile_path} className={"a"}/>
      <Grid arr={props.movies.combined_credits.cast}/>
    </>
  );
};

export default Actor;         
