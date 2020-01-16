import React, { useContext } from "react";
import { MovieGenres } from "../../utils/types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GenreContext } from "../../contexts/GenreContext";

const Genre = styled.span`
  padding: 0.3rem;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0.2rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
  transition-property: background-color, transform;

  &:hover {
    background-color: var(--coral);
    transform: translateY(-2px);
  }
`;

const GenreTags = styled.div`
  margin: .5rem 0;
`;

const Genres: React.FC<MovieGenres> = props => {
  const { handleGenre } = useContext(GenreContext);
  if (!props.genres) {
    return null;
  } else {
    return (
      <GenreTags>
        {props.genres.map(genre => (
          <Link
            key={genre.id}
            to="/Catalogue"
            onClick={() => handleGenre(genre.id.toString())}
          >
            <Genre>{genre.name}</Genre>
          </Link>
        ))}
      </GenreTags>
    );
  }
};

export default Genres;
