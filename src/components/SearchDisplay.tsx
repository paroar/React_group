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
  if(props.arr){
    return (
      <div className="grid">
        <Grid arr={props.arr} />
      </div>
    );
  }else{
    return null;
  }

};

export default SearchDisplay;
