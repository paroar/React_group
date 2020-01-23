import React, { useState } from "react";
import { FetchMovie } from "../../utils/types";
import Genres from "./Genres";
import styled from "styled-components";
import Videos from "./Videos";
import Stars from "../Stars";

const TextMovieInfo: React.FC<FetchMovie> = ({
  title,
  tagline,
  genres,
  vote_average,
  overview,
  videos
}) => {
  const [isOpen, setisOpen] = useState(false);

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };

  const WatchTrailer = styled.p`
    cursor: pointer;
    margin: 0.5rem 0;
    margin-right: auto;
    font-weight: 600;
    transition: all 0.3s;
    color: #fff;
    &:hover {
      color: var(--coral);
    }
  `;

  return (
    <>
      {isOpen ? (
        <Videos results={videos.results} handleIsOpen={handleIsOpen} />
      ) : null}
      <span></span>

      <div
        className="details--movieInfo--grid"
        onClick={e => e.stopPropagation()}
      >
        <div className="top-text">
          <h1 className="top-text__title">{title}</h1>
          {tagline ? <h3>{tagline}</h3> : null}
          <Stars vote_average={vote_average}/>

          <WatchTrailer onClick={() => handleIsOpen()}>
            Watch Trailer
          </WatchTrailer>
          <Genres genres={genres} />
        </div>

        <div className="bottom-text">
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};

export default TextMovieInfo;
