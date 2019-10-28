import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

type Movie = {
  poster_path: string;
  backdrop_path: string;
  
}

type DetailsProps = RouteComponentProps<{ slug: string }>

const Details: React.FC<DetailsProps> = ({ match: {params: {slug}}}) => {
  const [movie, setMovie] = useState<Movie | null>(null);


  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(
        `http://api.themoviedb.org/3/movie/${slug}?api_key=d893f1827f15c0a1128e80650af1466f&append_to_response=videos`
      );  
      const item = await data.json();  
      setMovie(item);
    };
  
    fetchMovie();
  }, [slug]);

  
  const imgStyle2 = {
    width: "auto",
    height: "513px"
  };

  if (!movie) {
    return null;
  }
  
  return (
    <div data-testid="details-page">
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}/>
      <img
        style={imgStyle2}
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}/>

      {
        /*
              //@ts-ignore*/
        
        }

      {
              
      <h4>Title: {movie.title}</h4>
      {
              //@ts-ignore*/}
      <h4>Rating: {movie.vote_average}</h4>
      {/*
              //@ts-ignore*/}
      <h4>Overview: {movie.overview}</h4>
    </div>
  );
};

export default Details;

/*
       <video>
          <source
            //@ts-ignore
            src={`https://www.youtube.com/watch?v=${x.key}`}
          />
        </video>
*/
