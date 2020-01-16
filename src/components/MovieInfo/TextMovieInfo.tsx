import React, { useState } from "react";
import { FetchMovie } from "../../utils/types";
import Genres from "./Genres";
import styled from "styled-components";
// import { GiPopcorn } from "react-icons/gi";
// import { FaTrashAlt } from "react-icons/fa";
import Videos from "./Videos";
import Svg from "../Svg";

const TextMovieInfo: React.FC<FetchMovie> = ({
  title,
  tagline,
  genres,
  //vote_average,
  overview,
  videos
}) => {
  const [isOpen, setisOpen] = useState(false);

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };

  const star = (
    <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
  );

  // const Rate = styled.span`
  //   position: relative;
  //   display: block;
  //   width: 95%;
  //   height: 1.5rem;
  //   background-color: rgba(0, 0, 0, 0.5);
  //   margin: 1rem auto;
  //   border-radius: 2px;
  //   border: 1px solid var(--coral);
  //   justify-content: center;
  //   align-items: center;

  //   &::after {
  //     display: block;
  //     content: "";
  //     width: ${vote_average * 10}%;
  //     height: 1.5rem;
  //     background-color: var(--coral);
  //   }
  // `;

  // const Num = styled.span`
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   font-weight: bold;
  // `;

  // const Good = styled.span`
  //   position: absolute;
  //   top: 50%;
  //   right: 0;
  //   transform: translate(-10%, -45%);
  // `;

  // const Bad = styled(Good)`
  //   right: none;
  //   left: 0;
  //   transform: translate(1%, -45%);
  // `;

  const WatchTrailer = styled.h3`
    display: inline;
    cursor: pointer;
    transition: all 0.3s;
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
        <h1>{title}</h1>
        {tagline ? <h3>{tagline}</h3> : null}
        <div className="rating-stars">
          <Svg class="">{star}</Svg>
          <Svg class="">{star}</Svg>
          <Svg class="">{star}</Svg>
          <Svg class="">{star}</Svg>
          <Svg class="">{star}</Svg>
        </div>
        <WatchTrailer onClick={() => handleIsOpen()}>
          Watch Trailer
        </WatchTrailer>
        <Genres genres={genres} />

        {/* 
        <Rate>
          <Good>
            <GiPopcorn size="1.3rem"></GiPopcorn>
          </Good>
          <Num>{vote_average}</Num>
          <Bad>
            <FaTrashAlt size="1.2rem"></FaTrashAlt>
          </Bad>
        </Rate> */}
        <p>{overview}</p>
      </div>
    </>
  );
};

export default TextMovieInfo;
