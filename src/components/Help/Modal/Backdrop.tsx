import React from "react";

type BackdropProps = {
    show: boolean;
    clicked: any;
}
const Backdrop = (props: BackdropProps) => {
    return(
        props.show ? <div className="backdrop"
        onClick={props.clicked}></div> : null
    );
};

export default Backdrop; 