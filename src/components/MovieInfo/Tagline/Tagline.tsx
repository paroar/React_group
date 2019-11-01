import React from "react";

type Tagline = {
  tagline: string;
};

const Tagline: React.FC<Tagline> = props => {
  return (
    <div>
      <h2>{props.tagline}</h2>
    </div>
  );
};

export default Tagline;
