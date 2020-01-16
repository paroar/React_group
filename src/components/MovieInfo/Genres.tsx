import React, { useContext } from "react";
import { MovieGenres } from "../../utils/types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GenreContext } from "../../contexts/GenreContext";

const Genre = styled.span`
  padding: 0.3rem;
  background-image: linear-gradient(to bottom, black, rgba(34, 24, 28, 1));
  margin: 1rem 0.2rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.5s;
  transition-property: background-image, transform;

  &:hover {
    background-image: linear-gradient(to top, black, rgba(34, 24, 28, 1));

    transform: translateY(-4px);
  }
`;

const GenreTags = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
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
            className="genre"
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
