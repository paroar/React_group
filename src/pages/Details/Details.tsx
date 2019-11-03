import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import Poster from "../../components/Poster";
import MovieInfo from "../../components/MovieInfo";
import Cast from "../../components/Cast";
import Video from "../../components/Video";
import { FetchMovie } from "../../utils/types";
import Similar from "../../components/Similar/Similar";

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
        `http://api.themoviedb.org/3/movie/${slug}?api_key=d893f1827f15c0a1128e80650af1466f&append_to_response=videos,credits,similar`
      );
      const item = await data.json();
      setMovie(item);
    };

    fetchMovie();
  }, [slug]);

  if (!movie) {
    return null;
  } else {
    return (
      <div data-testid="details-page" className="details">
        <div className="details--movieInfo">
          <Poster
            imgPath={movie.poster_path}
            size={"original"}
            className={"poster"}
          />
          <MovieInfo {...movie} className="details--movieInfo__info"/>
        </div>
        <Cast {...movie}/>
        <div className="details--videos">
          <Video {...movie} />
        </div>
        <div className="grid">
          <Similar {...movie} />
        </div>
      </div>
    );
  }
};

export default Details;
