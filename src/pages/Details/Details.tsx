import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

type Movie = {
  poster_path: string;
  backdrop_path: string;
  title: string;
  vote_average: string;
  overview: string;
  videos: Videos;
};

type Videos = {
  results: Results[];
};

type Results = {
  key: string;
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
  } else {
    const path = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const divStyle = {
      background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(" + path + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return (
      <div data-testid="details-page" style={divStyle}>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt="poster-img"
        />

        <h4>Title</h4>
        <p>{movie.title}</p>
        <h4>Rating</h4>
        <p>{movie.vote_average}</p>
        <h4>Overview</h4>
        <p>{movie.overview}</p>

        {movie.videos.results.map(video => (
          <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.key}
            key={video.key}
          ></iframe>
        ))}
      </div>
    );
  }
};

export default Details;
