import React from "react";

const Button:React.FC<{}> = (props) => {
    return (
        <button className="btn-form">{props.children}</button>
    )
}

export default Button;