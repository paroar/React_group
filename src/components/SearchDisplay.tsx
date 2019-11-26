import React from "react";
import Grid from "./Grid";

type SearchMovie = {
  poster_path: string;
  title: string;
};
type SearchDisplayProps = {
  arr: SearchMovie[];
};
const SearchDisplay: React.FC<SearchDisplayProps> = props => {
  return (
    <div className="grid">
      <Grid arr={props.arr} />
    </div>
  );
};

export default SearchDisplay;
