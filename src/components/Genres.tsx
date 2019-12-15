import React from "react";
import { MovieGenres } from "../utils/types";
import styled from "styled-components";

const Genre = styled.span`
  display: inline-block;
  padding: 0.4rem;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0.2rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
  transition-property: background-color, transform;

  &:hover {
    background-color: #f76c5e;
    transform: translateY(-2px);
  }
`;

const GenreTags = styled.div`
  margin: 1rem auto;
`;

const Genres: React.FC<MovieGenres> = props => {
  if (!props.genres) {
    return null;
  } else {
    return (
      <GenreTags>
        {props.genres.map(genre => (
          <Genre key={genre.id}>{genre.name}</Genre>
        ))}
      </GenreTags>
    );
  }
};

export default Genres;
