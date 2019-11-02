import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import Poster from "../../components/Poster/Poster";

type Actor = {
  birthday?: string | null;
  known_for_department?: string;
  deathday?: string | null;
  id?: number;
  name?: string;
  also_known_as?: string[];
  gender?: 0 | 1 | 2;
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  profile_path: string;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string | null;
  combined_credits: {
    cast: { id: string; poster_path: string }[];
  };
};

type DetailsProps = RouteComponentProps<{ slug: string }>;
const Actor: React.FC<DetailsProps> = ({
  match: {
    params: { slug }
  }
}) => {
  const [movies, setMovie] = useState<Actor | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/person/${slug}?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&append_to_response=external_ids,combined_credits`
      );
      const item = await data.json();
      console.log(movies);
      console.log(item);
      setMovie(item);
    };

    fetchMovie();
  }, [slug]);

  if (!movies) {
    return null;
  } else {
    return (
      <>
        <h2>{movies.name}</h2>
        <Poster
          imgPath={movies.profile_path}
          size={"original"}
          className="grid--img"
        ></Poster>
        <div className="grid">
          {movies.combined_credits.cast.map(movie => (
            <Link key={movie.id} to={`/catalogue/${movie.id}`}>
              <Poster
                imgPath={movie.poster_path}
                size={"original"}
                className="grid--img"
              ></Poster>
            </Link>
          ))}
        </div>
      </>
    );
  }
};

export default Actor;

/*

*/
