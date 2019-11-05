import React from "react";
import MovieInfo from "../containers/MovieInfo";

const MovieInfoPage = (props:any) => {
    {console.log("MOVIEINFO")}
    //@ts-ignore
    return <MovieInfo id={props.id}/>
}

export default MovieInfoPage;
