import { RouteComponentProps } from "react-router";

export type IconProps = {
  name: String;
  logo: JSX.Element;
};

export type UrlProps = RouteComponentProps<{ slug: string }>;
export type TabsProps = {
  isOpen: boolean;
  handleIsOpen: () => void;
};
export type ActorProps = {
  info: ActorInfo;
};
export type CastProps = {
  credits: {
    cast: {
      character: string;
      id: number;
      name: string;
      profile_path: string;
    }[];
  };
};
export type Pick = {
  character: string;
  id: number;
  name: string;
  profile_path: string;
};
export type GridProps = {
  arr: any[];
};
export type MovieInfoProps = {
  movie: FetchMovie;
};
export type CatalogueContainerProps = {
  page?: number;
  id?: string;
  genre?: string;
  sort?: string;
  order?: string;
  rating?: string;
};
export type ActorIdProps = {
  slug: string;
};
export type MovieInfoContainerProps = {
  slug: string;
};
export type MovieIdProps = {
  slug: string;
};
export type ActorInfo = {
  birthday: string | null;
  deathday: string | null;
  id: number;
  name: string;
  biography: string;
  profile_path: string;
  imdb_id: string;
  homepage: string | null;
  combined_credits: {
    cast: { id: string; poster_path: string }[];
  };
};

export type PosterImgProps = {
  imgPath: string;
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
  poster_path: string;
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
