import React from "react";

const Button:React.FC<{}> = (props) => {
    return (
        <button className="btn">{props.children}</button>
    )
}

export default Button;