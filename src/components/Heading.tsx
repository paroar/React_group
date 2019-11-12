import React from "react";

const Heading: React.FC<{}> = props => {
  return (
    <div className="separator">
      <span className="heading2"></span>
      <h2 className="heading">{props.children}</h2>
    </div>
  );
};

export default Heading;
