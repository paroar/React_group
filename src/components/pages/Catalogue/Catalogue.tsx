import React, { useState, useEffect } from "react";
import Card from "../../Card";

const Catalogue: React.FC = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&page=1"
    );
    const items = await data.json();
    console.log(items);
    setMovies(items.results);
  };

  return (
    <>
      <h2 className="heading">Catalogue page</h2>
      <div className="Catalogue--grid">
        {movies.map(movie => (
          //@ts-ignore
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </>
  );
};

export default Catalogue;
