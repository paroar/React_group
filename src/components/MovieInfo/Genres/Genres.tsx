import React from "react";

type Genres = {
  genres: {
    id: string;
    name: string;
  }[];
};

const Genres: React.FC<Genres> = props => {
  if (!props.genres) {
    return null;
  } else {
    return (
      <div>
        <h3>
          {props.genres.map(genre => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </h3>
      </div>
    );
  }
};

export default Genres;
