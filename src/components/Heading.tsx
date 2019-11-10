import React from "react";

const Heading:React.FC<{}> = (props) => {
    return (
        <h2 className="heading">{props.children}</h2>
    )
}

export default Heading;