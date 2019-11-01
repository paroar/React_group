import React from "react";

type Overview = {
  overview: string;
};

const Overview: React.FC<Overview> = props => {
  return (
    <div>
      <span>{props.overview}</span>
    </div>
  );
};

export default Overview;
