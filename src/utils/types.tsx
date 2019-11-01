export type Movie = {
  id: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
  vote_average: string;
  overview: string;
  videos: {
    results: { key: string }[];
  };
};

export type FetchMovie = {
  poster_path: string;
  backdrop_path: string;
  title: string;
  vote_average: string;
  overview: string;
  tagline: string;
  genres: {
    id: string;
    name: string;
  }[];
  videos: {
    results: {
      key: string;
    }[];
  };
  credits: {
    cast: {
      name: string;
      character: string;
      profile_path: string;
    }[];
  };
  similar: {
    results: {
      id: string;
      poster_path: string;
    }[];
  };
  className?: string;
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
