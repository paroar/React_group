import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import Poster from "../components/Poster/Poster";
import {ActorInfo} from "../utils/types";


type DetailsProps = RouteComponentProps<{ slug: string }>;
const Actor: React.FC<DetailsProps> = ({
  match: {
    params: { slug }
  }
}) => {
  const [actorMovies, setMovie] = useState<ActorInfo | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/person/${slug}?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&append_to_response=external_ids,combined_credits`
      );
      const item = await data.json();
      setMovie(item);
    };

    fetchMovie();
  }, [slug]);

  if (!actorMovies) {
    return null;
  } else {
    return (
      <>
        <h2>{actorMovies.name}</h2>
        <Poster
          imgPath={actorMovies.profile_path}
          size={"original"}
          className="grid--img"
        ></Poster>
        <div className="grid">
          {actorMovies.combined_credits.cast.map(movie => (
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
