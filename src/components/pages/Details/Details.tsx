import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

type Movie = {
  poster_path: string;
  backdrop_path: string;
  title: string;
  vote_average: string;
  overview: string;
  videos: {};
  results: [];
};

type DetailsProps = RouteComponentProps<{ slug: string }>;

const Details: React.FC<DetailsProps> = ({
  match: {
    params: { slug }
  }
}) => {
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

  if (!movie) {
    return null;
  }

  return (
    <div data-testid="details-page">
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt="poster-img"
      />
      <img
        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt="backdrop-img"
      />

      {
        //@ts-ignore
        movie.videos.results.map(video => (
          <iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${video.key}`}>
          </iframe> 
        ))
      }

      <h4>Title: {movie.title}</h4>
      <h4>Rating: {movie.vote_average}</h4>
      <h4>Overview: {movie.overview}</h4>
    </div>
  );
};

export default Details;