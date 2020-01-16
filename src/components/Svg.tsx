import React from 'react'

type Svg = {
    class: string
}

const Svg:React.FC<Svg> = (props) => {
    return (
        <svg className={props.class}>
            {props.children}
        </svg>
    )
}

export default Svg;
