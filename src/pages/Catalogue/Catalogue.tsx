import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Card from "../../components/Card";

type Movie = {
  id: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
  vote_average: string;
  overview: string;
  videos: {
    results: {key: string}[];
  };
};

const Catalogue: React.FC = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  const [movies, setMovies] = useState<Movie[] | null>(null);

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&page=1"
    );
    const items = await data.json();
    console.log(items);
    setMovies(items.results);
  };

  if(!movies){
    return null;
  }else{
    return (
      <div className="catalogue">
        <div className="grid">
          {movies.map(movie=> (
            <Link key={movie.id} to={`/catalogue/${movie.id}`}><Card movie={movie}></Card></Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Catalogue;
