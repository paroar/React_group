import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import Hero from "../../components/Hero";

type FetchMovie = {
  poster_path: string;
  backdrop_path: string;
  title: string;
  vote_average: string;
  overview: string;
  tagline: string;
  genres: { name: string }[];
  videos: {
    results: { key: string }[];
  };
  credits: {
    cast: {
      name: string;
      character: string;
      profile_path: string;
    }[];
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
        `http://api.themoviedb.org/3/movie/${slug}?api_key=d893f1827f15c0a1128e80650af1466f&append_to_response=videos,credits`
      );
      const similar = await fetch(
        `https://api.themoviedb.org/3/movie/${slug}/similar?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&page=1`
      );
      const item = await data.json();
      const itemSimilar = await similar.json();
      console.log(itemSimilar, item.credits.cast);
      setMovie(item);
    };

    fetchMovie();
  }, [slug]);

  const createArr = (arr: any[]) => {
    let table = [];
    for (let i = 0; i < 5; i++) {
      table.push(arr[i]);
    }
    return table;
  };

  if (!movie) {
    return null;
  } else {
    return (
      <Hero hero="detailsHero">
        <div data-testid="details-page" className="details-background">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt="poster-img"
          />
          <h2>{movie.title}</h2>
          <h3>{movie.tagline}</h3>
          <h4>Rating:</h4>
          <p>{movie.vote_average}</p>
          <h4>Genres:</h4>
          {movie.genres.map(genre => (
            <p>{genre.name}</p>
          ))}
          <h4>Overview:</h4>
          <p>{movie.overview}</p>
          <h4>Cast:</h4>
          {createArr(movie.credits.cast).map(crew => (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w185${crew.profile_path}`}
                alt="poster-img"
              />
              <p>{crew.name} as {crew.character}</p>
            </>
          ))}

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
      </Hero>
    );
  }
};

export default Details;
