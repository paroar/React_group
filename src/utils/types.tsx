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
    id: number;
    name: string;
  }[];
};

export type FetchMovie = {
  adult: false;
  backdrop_path: string;
  budget: number;
  credits: {
    cast: {
      character: string;
      id: number;
      name: string;
      profile_path: string;
    }[];
  };
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  tagline: string;
  title: string;
  videos: {
    results: {
      key: string;
    }[];
  };
  vote_average: number;
};

export type PosterMovie = {
  id: number;
  poster_path?: string;
  profile_path?: string;
  combined_credits?: {
    cast: any[];
  }
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
