import React from "react";

type Rating = {
  rating: string;
};

const Rating: React.FC<Rating> = props => {
  return (
    <div>
      <span>Rating: {props.rating}</span>
    </div>
  );
};

export default Rating;
