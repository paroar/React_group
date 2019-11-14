import React from "react";
import Poster from "./Poster";

type SearchMovie = {
    poster_path: string,
    title: string,
  }
type SearchDisplayProps =  {
    arr: SearchMovie[];
}
const SearchDisplay:React.FC<SearchDisplayProps> = (props) => {


    return (<div>{props.arr.map(movie => <Poster size="w45" imgPath={movie.poster_path} />)}</div>);


}

export default SearchDisplay;