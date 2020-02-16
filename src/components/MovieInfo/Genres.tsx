import React, { useContext } from "react";
import { MovieGenres } from "../../utils/types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GenreContext } from "../../contexts/GenreContext";

const Genre = styled.span`
    padding: 0.4rem 1rem;
    border-radius: 2px;
    font-weight: 400;
    font-size: .8rem;

    transition: all .3s;
    box-shadow: 0rem 0.1rem 0.1rem black;
    background-color: transparent;
    border: 1px solid rgb(250, 114, 104);
    color: rgb(250, 114, 104);
    margin: .2rem;
    display: inline-block;
    cursor: pointer;

  &:hover {
    color: #b5a5ab;
    border: 1px solid #b5a5ab;
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
