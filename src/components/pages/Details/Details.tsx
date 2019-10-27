import React, { useState, useEffect } from "react";

const Details = (match: any) => {
  useEffect(() => {
    fetchMovie();
  }, []);

  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    const data = await fetch(
      `http://api.themoviedb.org/3/movie/${match.match.params.slug}?api_key=d893f1827f15c0a1128e80650af1466f&append_to_response=videos`
    );

    const item = await data.json();
    console.log("<<<<<",item);
    setMovie(item);
  };

  const imgStyle2 = {
    width: "auto",
    height: "513px"
  };

  return (
    <div data-testid="details-page">
      <img
        //@ts-ignore
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}/>

      <img
        style={imgStyle2}
        //@ts-ignore
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}/>

      {console.log(">>>",movie)}

      {/*
              //@ts-ignore*/}
      <h4>Title: {movie.title}</h4>
      {/*
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
