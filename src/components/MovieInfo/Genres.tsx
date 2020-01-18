import React, { useContext } from "react";
import { MovieGenres } from "../../utils/types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GenreContext } from "../../contexts/GenreContext";

const Genre = styled.span`
  padding: 0.4rem .7rem;
  background-image: linear-gradient(to bottom, black, rgba(34, 24, 28, 1));
  border-radius: 2px;
  margin: .2rem;
  cursor: pointer;
  transition: all 0.5s;
  transition-property: background-image, transform;
  box-shadow: 0 .2rem .1rem rgba(0,0,0,.5);
  display: inline-block; 

  &:hover {
    background-image: linear-gradient(to top, black, rgba(34, 24, 28, 1));
    transform: translateY(-3px);
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
