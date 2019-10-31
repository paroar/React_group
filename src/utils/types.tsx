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