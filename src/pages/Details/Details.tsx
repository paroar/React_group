import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

type FetchMovie = {
  poster_path: string;
  backdrop_path: string;
  title: string;
  vote_average: string;
  overview: string;
  videos: {
    results: {key: string}[];
  };
};

/*
type Movie = {
  posterPath: string;
  backdropPath: string;
  title: string;
  voteAverage: string;
  overview: string;
  videos: string[];
};

type Movie2 = {id: string} & Movie

const fromFetchMovie = (movie: FetchMovie): Movie  => {
  return {
    posterPath: movie.poster_path,
    videos: movie.videos.results.map(({key}) => key)
  }
}
*/


type DetailsProps = RouteComponentProps<{ slug: string }>;

const Details: React.FC<DetailsProps> = ({
  match: {
    params: { slug }
  }
}) => {
  const [movie, setMovie] = useState<FetchMovie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(
        `http://api.themoviedb.org/3/movie/${slug}?api_key=d893f1827f15c0a1128e80650af1466f&append_to_response=videos`
      );
      const similar = await fetch(
        `https://api.themoviedb.org/3/movie/${slug}/similar?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&page=1`
      )
      const item = await data.json();
      const itemSimilar = await similar.json();
      console.log(itemSimilar);
      setMovie(item);
    };

    fetchMovie();
  }, [slug]);

  if (!movie) {
    return null;
  } else {
    const path = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const divStyle = {
      background: "url(" + path+ ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center"
    };

    return (
      <div data-testid="details-page" className="details-background" style={divStyle}>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt="poster-img"
        />

        
        <h2>{movie.title}</h2>
        <h4>Rating</h4>
        <p>{movie.vote_average}</p>
        <h4>Overview</h4>
        <p>{movie.overview}</p>

        {movie.videos.results.map(video => (
          <iframe
            width="420"
            height="315"
            frameBorder="0"
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