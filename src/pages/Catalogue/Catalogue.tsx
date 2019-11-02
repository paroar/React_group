import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Poster from "../../components/Poster/Poster";
import { Movie } from "../../utils/types";

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
    setMovies(items.results);
  };

  if (!movies) {
    return null;
  } else {
    return (
        <div className="grid" data-testid="catalogue-page">
          {movies.map(movie => (
            <Link key={movie.id} to={`/catalogue/${movie.id}`}>
              <Poster imgPath={movie.poster_path} size={"original"} className="grid--img"></Poster>
            </Link>
          ))}
        </div>
    );
  }
};

export default Catalogue;
