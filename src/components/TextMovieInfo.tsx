import React from "react";
import { FetchMovie } from "../utils/types";
import Genres from "./Genres";
import styled from "styled-components";
import { GiPopcorn } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";

const TextMovieInfo: React.FC<FetchMovie> = ({
  title,
  tagline,
  genres,
  vote_average,
  overview
}) => {
  const Rate = styled.span`
    position: relative;
    display: block;
    width: 95%;
    height: 1.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 1rem auto;
    border-radius: 2px;
    border: 1px solid f76c5e;
    justify-content: center;
    align-items: center;

    &::after {
      display: block;
      content: "";
      width: ${vote_average * 10}%;
      height: 1.5rem;
      background-color: #f76c5e;
    }
  `;

  const Num = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  `;

  const Good = styled.span`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-10%,-45%);
  `;

  const Bad = styled(Good)`
    right: none;
    left: 0;
    transform: translate(1%,-45%);
  `;

  return (
    <div className="details--movieInfo--grid">
      <h1>{title}</h1>
      {tagline ? <h3>{tagline}</h3> : null}
      <Genres genres={genres} />
      <Rate>
        <Good>
          <GiPopcorn size="1.3rem"></GiPopcorn>
        </Good>
        <Num>{vote_average}</Num>
        <Bad>
          <FaTrashAlt size="1.2rem"></FaTrashAlt>
        </Bad>
      </Rate>
      <p>{overview}</p>
    </div>
  );
};

export default TextMovieInfo;
