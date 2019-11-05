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

export type ActorInfo = {
  birthday: string | null;
  known_for_department: string;
  deathday: string | null;
  id: number;
  name: string;
  also_known_as: string[];
  gender: 0 | 1 | 2;
  biography: string;
  popularity: number;
  place_of_birth: string | null;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: string | null;
  combined_credits: {
    cast: { id: string; poster_path: string }[];
  };
};

export type MoviePoster = {
  imgPath: string;
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original";
  className?: string;
};

export type Profile = {
  imgPath: string;
  size: "w45" | "w185" | "h632" | "original";
  className?: string;
};

export type HeroProps = {
  children: React.ReactNode;
  hero: string;
};

export type MovieGenres = {
  genres: {
    id: string;
    name: string;
  }[];
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
