import React from "react";

type Title = {
  title: string;
};

const Title: React.FC<Title> = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
